package com.cd.dojooverflow.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cd.dojooverflow.models.Answer;
import com.cd.dojooverflow.models.Question;
import com.cd.dojooverflow.models.Tag;
import com.cd.dojooverflow.services.QuestionService;
import com.cd.dojooverflow.services.TagService;

@Controller
@RequestMapping("/questions")
public class QuestionsController {
	private final QuestionService questionService;
	private final TagService tagService;
	
	public QuestionsController(QuestionService questionService, TagService tagService) {
		this.questionService = questionService;
		this.tagService = tagService;
	}
	
	@GetMapping("")
	public String index (Model model) {
		List <Question> allQuestions = questionService.allQuestions();
		model.addAttribute("allQuestions", allQuestions);
		return "/questions/showQuestions.jsp";
	}
	
	@GetMapping("/new")
	public String newQuestion (@Valid @ModelAttribute("questionObj") Question question, BindingResult result) {
		return "/questions/newQuestion.jsp";
	}
	
	@PostMapping("/new")
	public String createQuestion(Model model, @RequestParam("question") String question, @RequestParam("tags") String tags) {
		System.out.println("createQuestion invoked");
		ArrayList tagsList= new ArrayList(Arrays.asList(tags.split(",")));
		
		if (question.length() < 1) {
			System.out.println("StringError");
			String error = "Question cannot be empty";
			model.addAttribute("stringError", error);
			return "/questions/newQuestion.jsp";
		}
		
		if (tagsList.size() > 3) {
			System.out.println("TagError");
			String error = "You cannot add more than 3 tags";
			model.addAttribute("tagError", error);
			return "/questions/newQuestion.jsp";
		} else {
			Question tempQuestion = new Question();
			tempQuestion.setQuestion(question);
			Question newQuestion = questionService.createQuestion(tempQuestion);
			System.out.println("Creating new question" + newQuestion);
			for (int i = 0; i < tagsList.size(); i++) {
				System.out.println("i = " + i);
				Tag tempTag = tagService.findTag((String) tagsList.get(i));
				System.out.println("tempTag = " + tempTag);
				if (tempTag != null) {
					System.out.println("Tag already exists " + tempTag + " " + newQuestion + " " + newQuestion.getId());
					questionService.addTag(tempTag, newQuestion.getId());
				} else {
					System.out.println("Tag doesnt already exist");
					Tag newTag = new Tag();
					newTag.setSubject((String) tagsList.get(i)); 
					tagService.createTag(newTag);
					questionService.addTag(newTag, newQuestion.getId());
				}
			}
			return "redirect:/questions/";
		}
	}
	
	@GetMapping("{id}")
	public String showQuestionDetail(@PathVariable("id") Long id, Model model, @ModelAttribute("answerObj") Answer answer, BindingResult result) {
		Question question = questionService.findQuestion(id);
		model.addAttribute("question", question);
		return "/questions/questionDetails.jsp";
	}
}
