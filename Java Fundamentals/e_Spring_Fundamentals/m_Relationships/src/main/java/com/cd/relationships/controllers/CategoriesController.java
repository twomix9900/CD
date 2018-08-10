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
@RequestMapping("/categories")
public class CategoriesController {
	private final ProductService productService;
	private final CategoryService categoryService;
	
	public CategoriesController (ProductService productService, CategoryService categoryService) {
		this.productService = productService;
		this.categoryService = categoryService;
	}
	
	@RequestMapping("/new")
	public String index (@ModelAttribute("category") Category category) {
		System.out.println("category index invoked");
		return "/categories/newCategory.jsp";
	}
	
	@RequestMapping(value="/addCategory", method=RequestMethod.POST)
	public String createCategory (@ModelAttribute("category") Category category) {
		System.out.println("category createCategory invoked");
		categoryService.createCategory(category);
		Long categoryId = (long) category.getId();
		
		return "redirect:/categories/" + categoryId;
	}
	
	@RequestMapping("{id}")
	public String showCategory(@PathVariable("id") Long id, Model model) {
		System.out.println("category showCategory invoked");
		Category category = categoryService.findCategory(id);
		List <Product> allProducts = productService.allProducts();
		List <Product> categoryProducts = category.getProducts();

		model.addAttribute("category", category);
		model.addAttribute("allProducts", allProducts);
		model.addAttribute("categoryProducts", categoryProducts);
		return "/categories/show.jsp";
	}
	
	@RequestMapping(value="/addProductToCategory", method=RequestMethod.POST)
	public String addProductToCategory(@ModelAttribute("category") Category category, @RequestParam("categoryId") String categoryId) {
		Product product = category.getProducts().get(0);
		categoryService.addProduct(product, Long.parseLong(categoryId));
		return "redirect:/categories/" + categoryId;
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
