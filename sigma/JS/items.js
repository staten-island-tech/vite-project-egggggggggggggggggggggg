const pokemon = [
    {
        "name": "Flareon",
        "type": ["Fire"],
        "region": "Kanto",
        "evolution": ["Eevee"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 25.0  // weight in kg
    },
    {
        "name": "Gardevoir",
        "type": ["Psychic", "Fairy"],
        "region": "Hoenn",
        "evolution": ["Ralts", "Kirlia"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 48.4  // weight in kg
    },
    {
        "name": "Charizard",
        "type": ["Fire", "Flying"],
        "region": "Kanto",
        "evolution": ["Charmander", "Charmeleon"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 90.5  // weight in kg
    },
    {
        "name": "Lucario",
        "type": ["Fighting", "Steel"],
        "region": "Sinnoh",
        "evolution": ["Riolu"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 54.0  // weight in kg
    },
    {
        "name": "Torterra",
        "type": ["Grass", "Ground"],
        "region": "Sinnoh",
        "evolution": ["Turtwig", "Grotle"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",  // empty array for photos
        "weight": 310.0  // weight in kg
    },
    {
        "name": "Gyarados",
        "type": ["Water", "Flying"],
        "region": "Kanto",
        "evolution": ["Magikarp"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png",  // empty array for photos
        "weight": 235.0  // weight in kg
    },
    {
        "name": "Mimikyu",
        "type": ["Ghost", "Fairy"],
        "region": "Alola",
        "evolution": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 0.7  // weight in kg
    },
    {
        "name": "Incineroar",
        "type": ["Fire", "Dark"],
        "region": "Alola",
        "evolution": ["Litten", "Torracat"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 83.0  // weight in kg
    },
    {
        "name": "Dragonite",
        "type": ["Dragon", "Flying"],
        "region": "Kanto",
        "evolution": ["Dratini", "Dragonair"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 210.0  // weight in kg
    },
    {
        "name": "Corviknight",
        "type": ["Flying", "Steel"],
        "region": "Galar",
        "evolution": ["Rookidee", "Corvisquire"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 75.0  // weight in kg
    },
    {
        "name": "Ampharos",
        "type": ["Electric"],
        "region": "Johto",
        "evolution": ["Mareep", "Flaaffy"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 61.5  // weight in kg
    },
    {
        "name": "Sableye",
        "type": ["Dark", "Ghost"],
        "region": "Hoenn",
        "evolution": [],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 11.0  // weight in kg
    },
    {
        "name": "Venusaur",
        "type": ["Grass", "Poison"],
        "region": "Kanto",
        "evolution": ["Bulbasaur", "Ivysaur"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 100.0  // weight in kg
    },
    {
        "name": "Froslass",
        "type": ["Ice", "Ghost"],
        "region": "Sinnoh",
        "evolution": ["Snorunt"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 26.6  // weight in kg
    },
    {
        "name": "Scizor",
        "type": ["Bug", "Steel"],
        "region": "Johto",
        "evolution": ["Scyther"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 118.0  // weight in kg
    },
    {
        "name": "Hatterene",
        "type": ["Psychic", "Fairy"],
        "region": "Galar",
        "evolution": ["Hattrem", "Hattenna"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 5.1  // weight in kg
    },
    {
        "name": "Togekiss",
        "type": ["Fairy", "Flying"],
        "region": "Sinnoh",
        "evolution": ["Togepi", "Togetic"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 38.0  // weight in kg
    },
    {
        "name": "Gallade",
        "type": ["Psychic", "Fighting"],
        "region": "Sinnoh",
        "evolution": ["Ralts", "Kirlia"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 52.0  // weight in kg
    },
    {
        "name": "Cinderace",
        "type": ["Fire"],
        "region": "Galar",
        "evolution": ["Scorbunny", "Raboot"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 33.0  // weight in kg
    },
    {
        "name": "Porygon-Z",
        "type": ["Normal"],
        "region": "Sinnoh",
        "evolution": ["Porygon", "Porygon2"],
        "photos": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",  // empty array for photos
        "weight": 34.0  // weight in kg
    }
];

export { pokemon };
