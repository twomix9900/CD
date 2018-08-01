package com.cd.zookeeper;

public class Mammal {
	protected int energyLevel;
	
	
	public int displayEnergy() {
		System.out.println("Current energy level is " + energyLevel);
		return this.energyLevel;
	}
	
	
}
