package com.cd.relationships.services;

import org.springframework.stereotype.Service;

import com.cd.relationships.models.Category;
import com.cd.relationships.models.CategoryProduct;
import com.cd.relationships.models.Product;
import com.cd.relationships.repositories.CategoryProductRepository;

@Service
public class CategoryProductService {
	private final CategoryProductRepository categoryProductRepository;
	
	public CategoryProductService(CategoryProductRepository categoryProductRepository) {
		this.categoryProductRepository = categoryProductRepository;
	}
	
	public CategoryProduct addCP(Product product, Category category) {
		CategoryProduct cp = new CategoryProduct();
		cp.setCategory(category);
		cp.setProduct(product);
		return categoryProductRepository.save(cp);
	}
}
