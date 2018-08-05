package com.cd.routing;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class DojoController {
	@RequestMapping("/dojo")
	public String index() {
		return "The dojo is awesome!";
	}
	
	@RequestMapping("/burbank-dojo")
	public String burbankDojo() {
		return "Burbank Dojo is located in Southern California!";
	}
	
	@RequestMapping("san-jose")
	public String sanjose() {
		return "SJ dojo is the HQ";
	}
}
