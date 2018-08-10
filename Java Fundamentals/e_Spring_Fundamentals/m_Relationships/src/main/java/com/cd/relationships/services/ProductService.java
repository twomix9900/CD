package com.cd.relationships.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cd.relationships.models.Category;
import com.cd.relationships.models.Product;
import com.cd.relationships.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository productRepository;
	public ProductService(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	
	public List<Product> allProducts() {
		return productRepository.findAll();
	}
	
	public Product createProduct(Product product) {
		return productRepository.save(product);
	}
	
	public Product findProduct(Long id) {
	Optional<Product> optionalProduct = productRepository.findById(id);
	if(optionalProduct.isPresent()) {
		return optionalProduct.get();
		} else {
		return null;
		}
	}
	
	public Product updateProduct(Product product) {
		product.setName(product.getName());
		product.setDescription(product.getDescription());
		product.setPrice(product.getPrice());
		
		return productRepository.save(product);
	}
	
	public Boolean deleteProduct(Long id) {
		Optional<Product> optionalProduct = productRepository.findById(id);
		if(optionalProduct.isPresent()) {
			productRepository.deleteById(id);
			return true; 
		} else {
			return false;
		}
	}
	
	public Product addCategory(Category category, Long productId) {
		Product product = productRepository.findById(productId).get();
		product.getCategories().add(category);
		productRepository.save(product);
		return product;
	}
}
