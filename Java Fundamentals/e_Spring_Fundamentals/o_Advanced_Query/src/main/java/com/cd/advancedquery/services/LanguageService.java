package com.cd.advancedquery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.advancedquery.models.Language;
import com.cd.advancedquery.repositories.LanguageRepository;

@Service
public class LanguageService {
	private final LanguageRepository languageRepository;
	public LanguageService(LanguageRepository languageRepository) {
		this.languageRepository = languageRepository;
	}
	
	public List<Language> allLanguages() {
		return languageRepository.findAll();
	}
	
	public Language createLanguage(Language language) {
		return languageRepository.save(language);
	}
	
	public Language findLanguage(Long id) {
	Optional<Language> optionalLanguage = languageRepository.findById(id);
	if(optionalLanguage.isPresent()) {
		return optionalLanguage.get();
		} else {
		return null;
		}
	}
	
	public Language updateLanguage(Language language) {
		
		
		return languageRepository.save(language);
	}
	
	public Boolean deleteLanguage(Long id) {
		Optional<Language> optionalLanguage = languageRepository.findById(id);
		if(optionalLanguage.isPresent()) {
			languageRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
}
