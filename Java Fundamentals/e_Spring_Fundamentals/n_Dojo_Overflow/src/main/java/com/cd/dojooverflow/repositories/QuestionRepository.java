package com.cd.dojooverflow.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.dojooverflow.models.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long>{
	List<Question> findAll();
	Optional<Question> findById(Long id);
	void deleteById(Long id);
}
