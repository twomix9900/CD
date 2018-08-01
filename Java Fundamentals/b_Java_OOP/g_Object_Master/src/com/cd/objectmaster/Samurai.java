package com.cd.objectmaster;

public class Samurai extends Human {
	private static int counter = 0;
	
	Samurai() {
		this.health = 200;
		counter++;
	}
	
	public void deathblow(Human human) {
		human.health = 0;
		this.health /= 2;
		System.out.println("Samurai's new health after dealing the deathblow is " + this.health);
	}
	
	public void meditate() {
		this.health += 0.5 * this.health;
		System.out.println("Samurai's new health is " + this.health);
	}
	
	public static int howMany() {
		return counter;
	}
}
