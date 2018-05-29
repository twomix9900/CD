$(document).ready(function(){

    for (let i = 1; i < 152; i++) {
      $.get("https://pokeapi.co/api/v2/pokemon/" + i, function (res) {
        let content = "";
        let name = res.name;
        let image = "http://pokeapi.co/media/img/" + i;
        let type1 = res.types[0].type.name;
        res.types[1] ? type2 = res.types[1].type.name : type2 = "N/A";
        let height = res.height;
        let weight = res.weight;

        content = "<img pokemon-id=" + i + " ";
        content += "pokemon-name=" + name + " ";
        content += "pokemon-image=" + image + " ";
        content += "pokemon-type1=" + type1 + " ";
        content += "pokemon-type2=" + type2 + " ";
        content += "pokemon-height=" + height + " ";
        content += "pokemon-weight=" + weight + " ";
        content += "src=http://pokeapi.co/media/img/" + i + ".png>"      
        $(".pokedex-images").append(content);

        $("img").click(function() {
          let content;
          let pokemonId = $(this).attr("pokemon-id");
          let pokemonName = $(this).attr("pokemon-name");
          let pokemonImage = $(this).attr("pokemon-image");
          let pokemonType1 = $(this).attr("pokemon-type1");
          let pokemonType2 = $(this).attr("pokemon-type2");
          let pokemonHeight = $(this).attr("pokemon-height");
          let pokemonWeight = $(this).attr("pokemon-weight");
    
          content = "";
          content += "<h2>" + pokemonName + "</h2>";
          content += "<img src=" + pokemonImage + ".png>";
          content += "<h2>Types</h2>";
          content += "<p>" + pokemonType1 + "</p>";
          content += "<p>" + pokemonType2 + "</p>";
          content += "<h2>Height</h2>";
          content += pokemonHeight;
          content += "<h2>Weight</h2>";
          content += pokemonWeight;
          $(".pokedex-details").html(content);
        })
      }, "json")
    }

})

//NAME
//IMAGE
//TYPE(S)
//HEIGHT
//WEIGHT