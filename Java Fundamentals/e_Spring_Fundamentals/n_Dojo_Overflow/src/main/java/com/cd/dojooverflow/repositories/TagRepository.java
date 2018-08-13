package com.cd.dojooverflow.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.dojooverflow.models.Tag;

@Repository
public interface TagRepository extends CrudRepository<Tag, Long>{
	List<Tag> findAll();
	Optional<Tag> findById(Long id);
	void deleteById(Long id);
	Optional<Tag> findBySubjectContaining(String string);
	Optional<Tag> findOneBySubjectContaining(String tag);
	Optional<Tag> findOneBySubjectEquals(String tag);
}
