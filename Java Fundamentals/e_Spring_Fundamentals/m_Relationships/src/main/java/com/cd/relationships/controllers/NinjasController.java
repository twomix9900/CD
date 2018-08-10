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
@RequestMapping("/ninjas")
public class NinjasController {
	private final NinjaService ninjaService;
	private final DojoService dojoService;
	
	public NinjasController(NinjaService ninjaService, DojoService dojoService) {
		this.ninjaService = ninjaService;
		this.dojoService = dojoService;
	}
	
	@RequestMapping("/new")
	public String index (@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "/ninjas/newNinja.jsp";
	}
	
	@RequestMapping(value="/addNinja", method=RequestMethod.POST)
	public String createNinja (@ModelAttribute("ninja") Ninja ninja) {
		ninjaService.createNinja(ninja);
		Long dojoId =  (long) ninja.getDojo().getId();
		
		return "redirect:/dojos/" + dojoId;
	}
}
