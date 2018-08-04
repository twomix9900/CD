package com.cd.teamroster.models;

import java.util.ArrayList;

public class Roster {
	private ArrayList<Team> teams;
	
	public Roster() {
		teams = new ArrayList<Team>();
	}
	
	public void addTeam(Team team) {
		teams.add(team);
	}
	
	public ArrayList<Team> getRoster() {
		return teams;
	}

	
}
