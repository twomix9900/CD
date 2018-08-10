package com.cd.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.relationships.models.Category;
import com.cd.relationships.models.Product;
import com.cd.relationships.repositories.CategoryRepository;

@Service
public class CategoryService {
	private final CategoryRepository categoryRepository;
	public CategoryService(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}
	
	public List<Category> allCategories() {
		return categoryRepository.findAll();
	}
	
	public Category createCategory(Category category) {
		return categoryRepository.save(category);
	}
	
	public Category findCategory(Long id) {
	Optional<Category> optionalCategory = categoryRepository.findById(id);
	if(optionalCategory.isPresent()) {
		return optionalCategory.get();
		} else {
		return null;
		}
	}
	
	public Category updateCategory(Category category) {
		category.setName(category.getName());
		
		return categoryRepository.save(category);
	}
	
	public Boolean deleteCategory(Long id) {
		Optional<Category> optionalCategory = categoryRepository.findById(id);
		if(optionalCategory.isPresent()) {
			categoryRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
	
	public Category addProduct(Product product, Long categoryId) {
		Category category = categoryRepository.findById(categoryId).get();
		category.getProducts().add(product);
		categoryRepository.save(category);
		return category;
	}
}
