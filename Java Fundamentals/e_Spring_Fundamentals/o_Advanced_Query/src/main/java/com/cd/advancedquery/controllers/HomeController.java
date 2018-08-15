package com.cd.advancedquery.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.cd.advancedquery.models.Country;
import com.cd.advancedquery.services.ApiService;

@Controller
public class HomeController {
	private final ApiService apiService;
	
	public HomeController(ApiService apiService) {
		this.apiService = apiService;
	}
	
	@GetMapping("")
	public String Home () {
		//  1: What query would you run to get all the countries that speak Slovene? 
		//  Your query should return the name of the country, language, and language 
		//  percentage. Your query should arrange the result by language percentage 
		//  in descending order.
//		apiService.findAllCountriesSpeakingSlovene();
		
		//  2: What query would you run to display the total number of cities for each country?
		//  Your query should return the name of the country and the total number of cities.
		//  Your query should arrange the result by the number of cities in descending order.
//		apiService.citiesInEachCountry();
		
		//	3: What query would you run to get all the cities in Mexico with a population 
		// of greater than 500,000? Your query should arrange the result by population 
		// in descending order.
//		apiService.citiesInMexico();
		
		// 4: What query would you run to get all languages in each country with a percentage 
		// greater than 89%? Your query should arrange the result by percentage in descending 
		// order.
//		apiService.majorityLanguageInCountry();
		
		// 5: What query would you run to get all the countries with Surface Area 
		// below 501 and Population greater than 100,000?
//		apiService.allMediumSizedCountries();
		
		// 6: What query would you run to get countries with only Constitutional 
		// Monarchy with a surface area of more than 200 and a life expectancy 
		// greater than 75 years?
//		apiService.constitutionalMonarchyCountries();
		
		// 7: What query would you run to get all the cities of Argentina 
		// inside the Buenos Aires district and have the population greater 
		// than 500, 000? The query should return the Country Name, City Name, 
		// District, and Population.
//		apiService.argentinaCities();
		
		// 8: What query would you run to summarize the number of 
		// countries in each region? The query should display the name of 
		// the region and the number of countries. Also, the query should arrange 
		// the result by the number of countries in descending order.
		apiService.countrySummary();
		
		
		return "hello";
	}
}
