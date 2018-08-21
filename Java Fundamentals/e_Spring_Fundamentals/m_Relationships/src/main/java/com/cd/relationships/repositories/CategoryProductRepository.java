package com.cd.relationships.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.cd.relationships.models.CategoryProduct;

@Repository
public interface CategoryProductRepository extends CrudRepository<CategoryProduct, Long>{
	List<CategoryProduct> findAll();
	Optional<CategoryProduct> findById(Long id);
	void deleteById(Long id);
	CategoryProduct findByCategoryIdAndProductId(Long categoryId, Long productId);
}
