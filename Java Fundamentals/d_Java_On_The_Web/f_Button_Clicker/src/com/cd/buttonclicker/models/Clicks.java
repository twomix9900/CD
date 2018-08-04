package com.cd.buttonclicker.models;

public class Clicks {
	private int clicks;
	
	Clicks() {
		clicks = 0;
	}
	
	public void addClick() {
		clicks++;
	}
	
	public int getClicks() {
		return clicks;
	}
}
