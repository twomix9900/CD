package com.cd.relationships.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.cd.relationships.models.Category;
import com.cd.relationships.models.Product;
import com.cd.relationships.services.CategoryService;
import com.cd.relationships.services.ProductService;

@Controller
@RequestMapping("/products")
public class ProductsController {
	private final ProductService productService;
	private final CategoryService categoryService;
	
	public ProductsController(ProductService productService, CategoryService categoryService) {
		this.productService = productService;
		this.categoryService = categoryService;
	}
	
	@RequestMapping("/new")
	public String index (@ModelAttribute("product") Product product) {
		System.out.println("product index invoked");
		return "/products/newProduct.jsp";
	}
	
	@RequestMapping(value="/addProduct", method=RequestMethod.POST)
	public String createProduct (@ModelAttribute("product") Product product) {
		System.out.println("product createProduct invoked");
		productService.createProduct(product);
		Long productId =  (long) product.getId();
		
		return "redirect:/products/" + productId;
	}
	
	@RequestMapping("{id}")
	public String showProduct(@PathVariable("id") Long id, Model model) {
		System.out.println("product showProduct invoked");
		Product product = productService.findProduct(id);
		List <Category> allCategories = categoryService.allCategories();
		List <Category> productCategories = product.getCategories();

		model.addAttribute("product", product);
		model.addAttribute("allCategories", allCategories);
		model.addAttribute("productCategories", productCategories);
		return "/products/show.jsp";
	}
	
	@RequestMapping(value="/addCategoryToProduct", method=RequestMethod.POST)
	public String addCategoryToProduct(@ModelAttribute("product") Product product, @RequestParam("productId") String productId) {
		Category category = product.getCategories().get(0);
		productService.addCategory(category, Long.parseLong(productId));
		return "redirect:/products/" + productId;
	}
	
}

//@Controller
//@RequestMapping("/ninjas")
//public class NinjasController {
//	private final NinjaService ninjaService;
//	private final DojoService dojoService;
//	
//	public NinjasController(NinjaService ninjaService, DojoService dojoService) {
//		this.ninjaService = ninjaService;
//		this.dojoService = dojoService;
//	}
//	
//	@RequestMapping("/new")
//	public String index (@ModelAttribute("ninja") Ninja ninja, Model model) {
//		List<Dojo> dojos = dojoService.allDojos();
//		model.addAttribute("dojos", dojos);
//		return "/ninjas/newNinja.jsp";
//	}
//	
//	@RequestMapping(value="/addNinja", method=RequestMethod.POST)
//	public String createNinja (@ModelAttribute("ninja") Ninja ninja) {
//		ninjaService.createNinja(ninja);
//		Long dojoId =  (long) ninja.getDojo().getId();
//		
//		return "redirect:/dojos/" + dojoId;
//	}
//}

//public class DojosController {
//private final NinjaService ninjaService;
//private final DojoService dojoService;
//
//public DojosController (NinjaService ninjaService, DojoService dojoService) {
//	this.ninjaService = ninjaService;
//	this.dojoService = dojoService;
//}
//
//@RequestMapping("/new")
//public String index (@ModelAttribute("dojo") Dojo dojo) {
//	return "/dojos/newDojo.jsp";
//}
//
//@RequestMapping(value="/addDojo", method=RequestMethod.POST)
//public String createDojo(Model model, @ModelAttribute("dojo") Dojo dojo) {
//	dojoService.createDojo(dojo);
//	return "redirect:/ninjas/new";
//}
//
//@RequestMapping("{id}")
//public String showDojo(@PathVariable("id") Long id, Model model) {
//	List <Ninja> ninjas = dojoService.findDojo(id).getNinjas();
//	model.addAttribute("ninjas", ninjas);
//	return "/dojos/show.jsp";
//}
//}
