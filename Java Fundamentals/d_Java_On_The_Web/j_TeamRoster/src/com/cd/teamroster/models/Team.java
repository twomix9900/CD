package com.cd.teamroster.models;

import java.util.ArrayList;

public class Team {
	private String name;
	private ArrayList<Player> players;
	
	Team() {
		players = new ArrayList<Player>();
	}

	public Team(String name) {
		super();
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ArrayList<Player> getPlayers() {
		return players;
	}

	public void addPlayer(Player player) {
		players.add(player);
	}
	
	public void deletePlayer(Player player) {
		
	}

}
