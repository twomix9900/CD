package com.cd.zookeeper;

public class Gorilla extends Mammal {
	Gorilla () {
		this.energyLevel = 100;
	}
	
	public void throwSomething() {
		this.energyLevel -= 5;
		System.out.println("Gorilla is throwing things at people");
	}
	
	public void eatBananas() {
		this.energyLevel += 10;
		System.out.println("Gorilla is eating some bananas");
	}
	
	public void climb() {
		this.energyLevel -= 10;
		System.out.println("Gorilla is climbing some stuff");
	}
	
	
}
