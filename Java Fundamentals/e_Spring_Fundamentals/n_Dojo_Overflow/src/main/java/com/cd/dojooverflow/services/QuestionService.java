package com.cd.dojooverflow.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.cd.dojooverflow.models.Answer;
import com.cd.dojooverflow.models.Question;
import com.cd.dojooverflow.models.Tag;
import com.cd.dojooverflow.repositories.AnswerRepository;
import com.cd.dojooverflow.repositories.QuestionRepository;

@Service
public class QuestionService {
	private final QuestionRepository questionRepository;
	private final AnswerRepository answerRepository;	
	public QuestionService(QuestionRepository questionRepository, AnswerRepository answerRepository) {
		this.answerRepository = answerRepository;
		this.questionRepository = questionRepository;
	}
	
	public List<Question> allQuestions() {
		return questionRepository.findAll();
	}
	
	public Question createQuestion(Question question) {
		return questionRepository.save(question);
	}
	
	public Question findQuestion(Long id) {
	Optional<Question> optionalQuestion = questionRepository.findById(id);
	if(optionalQuestion.isPresent()) {
		return optionalQuestion.get();
		} else {
		return null;
		}
	}
	
	public Question updateQuestion(Question question) {
		
		questionRepository.save(question);
		return question;
	}
	
	public Question addAnswer(Question question, Answer answer) {
		answer.setQuestion(question);
		answerRepository.save(answer);
		return question;
	}
	
	public Boolean deleteQuestion(Long id) {
		Optional<Question> optionalQuestion = questionRepository.findById(id);
		if(optionalQuestion.isPresent()) {
			questionRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
	
	public Question addTag(Tag tag, Long questionId) {
		Question question = questionRepository.findById(questionId).get();
		List<Tag> allTags = question.getTags();
		allTags.add(tag);
		question.setTags(allTags);
		questionRepository.save(question);
		return question;
	}
}
