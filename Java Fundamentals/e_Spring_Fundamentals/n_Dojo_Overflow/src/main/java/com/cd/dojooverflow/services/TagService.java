package com.cd.dojooverflow.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.dojooverflow.models.Question;
import com.cd.dojooverflow.models.Tag;
import com.cd.dojooverflow.repositories.TagRepository;

@Service
public class TagService {
	private final TagRepository tagRepository;
	public TagService(TagRepository tagRepository) {
		this.tagRepository = tagRepository;
	}
	
	public List<Tag> allTags() {
		return tagRepository.findAll();
	}
	
	public Tag createTag(Tag tag) {
		return tagRepository.save(tag);
	}
	
	public Tag findTag(Long id) {
	Optional<Tag> optionalTag = tagRepository.findById(id);
	if(optionalTag.isPresent()) {
		return optionalTag.get();
		} else {
		return null;
		}
	}
	
	public Tag updateTag(Tag tag) {
		tag.setSubject(tag.getSubject());
		
		return tagRepository.save(tag);
	}
	
	public Boolean deleteTag(Long id) {
		Optional<Tag> optionalTag = tagRepository.findById(id);
		if(optionalTag.isPresent()) {
			tagRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
	
	public Tag addQuestion(Question question, Long tagId) {
		Tag tag = tagRepository.findById(tagId).get();
		tag.getQuestions().add(question);
		tagRepository.save(tag);
		return tag;
	}
	
	public Tag findTag(String tag) {
		Optional<Tag> optionalTag = tagRepository.findOneBySubjectEquals(tag);
		if(optionalTag.isPresent()) {
			return optionalTag.get();
		} else {
			return null;
		}
	}
}
