package com.cd.relationships.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.cd.relationships.models.Dojo;
import com.cd.relationships.models.Ninja;
import com.cd.relationships.services.DojoService;
import com.cd.relationships.services.NinjaService;

@Controller
@RequestMapping("/dojos")
public class DojosController {
	private final NinjaService ninjaService;
	private final DojoService dojoService;
	
	public DojosController (NinjaService ninjaService, DojoService dojoService) {
		this.ninjaService = ninjaService;
		this.dojoService = dojoService;
	}
	
	@RequestMapping("/new")
	public String index (@ModelAttribute("dojo") Dojo dojo) {
		return "/dojos/newDojo.jsp";
	}
	
	@RequestMapping(value="/addDojo", method=RequestMethod.POST)
	public String createDojo(Model model, @ModelAttribute("dojo") Dojo dojo) {
		dojoService.createDojo(dojo);
		return "redirect:/ninjas/new";
	}
	
	@RequestMapping("{id}")
	public String showDojo(@PathVariable("id") Long id, Model model) {
		List <Ninja> ninjas = dojoService.findDojo(id).getNinjas();
		model.addAttribute("ninjas", ninjas);
		return "/dojos/show.jsp";
	}
}

//@Controller
//public class PersonsController {
//	private final PersonService personService;
//	private final LicenseService licenseService;
//	
//	public PersonsController (PersonService personService, LicenseService licenseService) {
//		this.personService = personService;
//		this.licenseService = licenseService;
//	}	
//	
//	@RequestMapping("")
//	public String index (Model model, @ModelAttribute("person") Person person) {
//		return "/persons/index.jsp";
//	}
//	
//	@RequestMapping(value="", method=RequestMethod.POST)
//	public String createPerson(Model model, @ModelAttribute("person") Person person, @ModelAttribute("license") License license) {
//		
//		personService.createPerson(person);
//		List<Person> persons = personService.allPersons();
//		model.addAttribute("persons", persons);
//		return "/licenses/index.jsp";
//	}
//	
//	@RequestMapping(value="/license/new", method=RequestMethod.POST)
//	public String createLicense(Model model, @ModelAttribute("license") License license) {
//		List<Person> persons = personService.allPersons();
//		Long licenseNumber = persons.get(persons.size() - 1).getId();
//		String formattedNumber = String.format("%06d", licenseNumber);
//		license.setNumber(formattedNumber);
//		licenseService.createLicense(license);
//
//		
//		
//		
//		return "redirect:/";
//	}
//}