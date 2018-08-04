package com.cd.pets.models;

public class Dog extends Animal implements Pet {	
	Dog() {
	}

	public Dog(String name, String breed, int weight) {
		super(name, breed, weight);
		System.out.println(this.weight);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String showAffection() {
		// TODO Auto-generated method stub
		if (this.weight < 15) {
			System.out.println(this.weight);
			return "hopped onto your lap and cuddled you!";
		} else {
			System.out.println(this.weight);
			return "curled up next to you.";
		}
	}	
	
	
	
}
