package com.cd.pokemon;

public interface PokemonInterface {
	public Pokemon createPokemon(String name, int health, String type);
	public String pokemonInfo(Pokemon pokemon);
	public void listPokemon();
}