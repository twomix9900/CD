package com.cd.relationships.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.relationships.models.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{
	List<Category> findAll();
	Optional<Category> findById(Long id);
	void deleteById(Long id);
}
