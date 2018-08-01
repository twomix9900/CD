package com.cd.pokemon;

public class PokemonTest {

	public static void main(String[] args) {
		Pokemon pikachu = new Pokemon("Pikachu", 100, "Lightning");
		Pokemon raichu = new Pokemon("Raichu", 120, "Lightning");
		pikachu.attackPokemon(raichu);
	}

}
