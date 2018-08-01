package com.cd.pokemon;

public abstract class AbstractPokemon implements PokemonInterface {
//	@Override
	public Pokemon createPokemon(String name, int health, String type) {
		return new Pokemon(name, health, type);
	}
	
	public String pokemonInfo(Pokemon pokemon) {
		return pokemon.name + "'s health: " + pokemon.health + ". Type: " + pokemon.type; 
	}
	
	
}
