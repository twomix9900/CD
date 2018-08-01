package com.cd.objectmaster;

public class Wizard extends Human {
	Wizard () {
		this.health = 50;
		this.intelligence = 8;
	}
	
	public void heal (Human human) {
		human.health += this.intelligence;
		System.out.println("Healed for " + this.intelligence);
	}
	
	public void fireball (Human human) {
		human.health -= this.intelligence * 3;
		System.out.println("Dealt" + this.intelligence * 3 + "damage.");
	}
}
