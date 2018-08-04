package com.cd.pets.models;

public class Cat extends Animal implements Pet {	
	Cat() {
	}

	public Cat(String name, String breed, int weight) {
		super(name, breed, weight);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String showAffection() {
		// TODO Auto-generated method stub
		return "looked at you with some affection. Maybe.";
	}	
	
}
