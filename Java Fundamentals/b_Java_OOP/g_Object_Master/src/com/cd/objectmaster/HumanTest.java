package com.cd.objectmaster;

public class HumanTest {

	public static void main(String[] args) {
		Human h1 = new Human();
		Human h2 = new Human();
		Samurai s1 = new Samurai();
		Samurai s2 = new Samurai();
		System.out.println(Samurai.howMany());
		h1.attack(h2);
		h1.showHealth();
		h2.showHealth();
	}

}
