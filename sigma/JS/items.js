const pokemon = [
    {
        "name": "Flareon",
        "type": ["Fire"],
        "region": "Kanto",
        "evolution": ["Eevee"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/136.png",  // Flareon is #136
        "weight": 25.0  // weight in kg
    },
    {
        "name": "Gardevoir",
        "type": ["Psychic", "Fairy"],
        "region": "Hoenn",
        "evolution": ["Ralts", "Kirlia"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/282.png",  // Gardevoir is #282
        "weight": 11  // weight in kg
    },
    {
        "name": "Charizard",
        "type": ["Fire", "Flying"],
        "region": "Kanto",
        "evolution": ["Charmander", "Charmeleon"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png",  // Charizard is #006
        "weight": 90.5  // weight in kg
    },
    {
        "name": "Lucario",
        "type": ["Fighting", "Steel"],
        "region": "Sinnoh",
        "evolution": ["Riolu"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/448.png",  // Lucario is #448
        "weight": 54.0  // weight in kg
    },
    {
        "name": "Torterra",
        "type": ["Grass", "Ground"],
        "region": "Sinnoh",
        "evolution": ["Turtwig", "Grotle"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/389.png",  // Torterra is #389
        "weight": 310.0  // weight in kg
    },
    {
        "name": "Gyarados",
        "type": ["Water", "Flying"],
        "region": "Kanto",
        "evolution": ["Magikarp"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/130.png",  // Gyarados is #130
        "weight": 235.0  // weight in kg
    },
    {
        "name": "Mimikyu",
        "type": ["Ghost", "Fairy"],
        "region": "Alola",
        "evolution": [],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/778.png",  // Mimikyu is #778
        "weight": 0.7  // weight in kg
    },
    {
        "name": "Incineroar",
        "type": ["Fire", "Dark"],
        "region": "Alola",
        "evolution": ["Litten", "Torracat"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/727.png",  // Incineroar is #727
        "weight": 83.0  // weight in kg
    },
    {
        "name": "Dragonite",
        "type": ["Dragon", "Flying"],
        "region": "Kanto",
        "evolution": ["Dratini", "Dragonair"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/149.png",  // Dragonite is #149
        "weight": 210.0  // weight in kg
    },
    {
        "name": "Corviknight",
        "type": ["Flying", "Steel"],
        "region": "Galar",
        "evolution": ["Rookidee", "Corvisquire"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/823.png",  // Corviknight is #823
        "weight": 75.0  // weight in kg
    },
    {
        "name": "Ampharos",
        "type": ["Electric"],
        "region": "Johto",
        "evolution": ["Mareep", "Flaaffy"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/181.png",  // Ampharos is #181
        "weight": 61.5  // weight in kg
    },
    {
        "name": "Sableye",
        "type": ["Dark", "Ghost"],
        "region": "Hoenn",
        "evolution": [],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/302.png",  // Sableye is #302
        "weight": 11.0  // weight in kg
    },
    {
        "name": "Venusaur",
        "type": ["Grass", "Poison"],
        "region": "Kanto",
        "evolution": ["Bulbasaur", "Ivysaur"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // Venusaur is #003
        "weight": 100.0  // weight in kg
    },
    {
        "name": "Froslass",
        "type": ["Ice", "Ghost"],
        "region": "Sinnoh",
        "evolution": ["Snorunt"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/478.png",  // Froslass is #478
        "weight": 26.6  // weight in kg
    },
    {
        "name": "Scizor",
        "type": ["Bug", "Steel"],
        "region": "Johto",
        "evolution": ["Scyther"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/212.png",  // Scizor is #212
        "weight": 118.0  // weight in kg
    },
    {
        "name": "Hatterene",
        "type": ["Psychic", "Fairy"],
        "region": "Galar",
        "evolution": ["Hattrem", "Hattenna"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/858.png",  // Hatterene is #858
        "weight": 5.1  // weight in kg
    },
    {
        "name": "Togekiss",
        "type": ["Fairy", "Flying"],
        "region": "Sinnoh",
        "evolution": ["Togepi", "Togetic"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/468.png",  // Togekiss is #468
        "weight": 38.0  // weight in kg
    },
    {
        "name": "Gallade",
        "type": ["Psychic", "Fighting"],
        "region": "Sinnoh",
        "evolution": ["Ralts", "Kirlia"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/475.png",  // Gallade is #475
        "weight": 52.0  // weight in kg
    },
    {
        "name": "Cinderace",
        "type": ["Fire"],
        "region": "Galar",
        "evolution": ["Scorbunny", "Raboot"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/815.png",  // Cinderace is #815
        "weight": 33.0  // weight in kg
    },
    {
        "name": "Porygon-Z",
        "type": ["Normal"],
        "region": "Sinnoh",
        "evolution": ["Porygon", "Porygon2"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/474.png",  // Porygon-Z is #474
        "weight": 34.0  // weight in kg
    }
];

export { pokemon };