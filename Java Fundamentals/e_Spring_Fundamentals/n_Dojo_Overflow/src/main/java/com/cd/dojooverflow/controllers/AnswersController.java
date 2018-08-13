package com.cd.dojooverflow.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.cd.dojooverflow.models.Answer;
import com.cd.dojooverflow.models.Question;
import com.cd.dojooverflow.services.AnswerService;
import com.cd.dojooverflow.services.QuestionService;

@Controller
@RequestMapping("/answers")
public class AnswersController {
	private final AnswerService answerService;
	private final QuestionService questionService;
	
	public AnswersController(AnswerService answerService, QuestionService questionService) {
		this.answerService = answerService;
		this.questionService = questionService;
	}
	
	
	@PostMapping("new")
	public String createAnswer(Model model, @ModelAttribute("answerObj") Answer answer, BindingResult result, @RequestParam("questionId") String questionId) {
		Question tempQuestion = questionService.findQuestion(Long.parseLong(questionId));
		questionService.addAnswer(tempQuestion, answer);
		return "redirect:/questions/";
	}
}
