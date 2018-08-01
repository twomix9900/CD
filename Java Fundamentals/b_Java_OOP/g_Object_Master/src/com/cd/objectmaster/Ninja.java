package com.cd.objectmaster;

public class Ninja extends Human {
	Ninja() {
		this.stealth = 10;
	}
	
	public void steal(Human human) {
		human.health -= this.stealth;
		this.health += this.stealth;
		System.out.println("Health stolen: " + this.stealth);
	}
	
	public void runAway() {
		this.health -= 10;
		System.out.println("Ran away");
	}
	
	
}
