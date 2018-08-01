package com.cd.zookeeper;

public class Bat extends Mammal {
	Bat () {
		this.energyLevel = 300;
	}
	
	public void fly () {
		this.energyLevel -= 50;
		System.out.println("The bat takes off");
	}
	
	public void eatHumans() {
		this.energyLevel += 25;
		System.out.println("Nomz");
	}
	
	public void attackTown() {
		this.energyLevel -= 100;
		System.out.println("Town is on fire!");
	}
	
	
}
