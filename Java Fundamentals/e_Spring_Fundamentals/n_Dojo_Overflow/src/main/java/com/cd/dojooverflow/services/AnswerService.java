package com.cd.dojooverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.dojooverflow.models.Answer;
import com.cd.dojooverflow.repositories.AnswerRepository;

@Service
public class AnswerService {
	private final AnswerRepository answerRepository;
	public AnswerService(AnswerRepository answerRepository) {
		this.answerRepository = answerRepository;
	}
	
	public List<Answer> allCategories() {
		return answerRepository.findAll();
	}
	
	public Answer createAnswer(Answer answer) {
		return answerRepository.save(answer);
	}
	
	public Answer findAnswer(Long id) {
	Optional<Answer> optionalAnswer = answerRepository.findById(id);
	if(optionalAnswer.isPresent()) {
		return optionalAnswer.get();
		} else {
		return null;
		}
	}
	
	public Answer updateAnswer(Answer answer) {
		answer.setAnswer(answer.getAnswer());
		
		return answerRepository.save(answer);
	}
	
	public Boolean deleteAnswer(Long id) {
		Optional<Answer> optionalAnswer = answerRepository.findById(id);
		if(optionalAnswer.isPresent()) {
			answerRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
}
