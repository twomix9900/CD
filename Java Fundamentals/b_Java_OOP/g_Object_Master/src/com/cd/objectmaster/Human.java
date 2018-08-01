package com.cd.objectmaster;

public class Human {
	protected int strength;
	protected int stealth;
	protected int intelligence;
	protected int health;
	
	Human() {
		this.strength = 3;
		this.stealth = 3;
		this.intelligence = 3;
		this.health = 100;
	}
	
	public void attack (Human human) {
		human.health -= this.strength;
		System.out.println("Attacked human's health is now " + human.health);
	}
	
	public void showHealth() {
		System.out.println(this.health);
	}
	
}
