function filter(weight_range, types)
{
  const filtered = pokemon.filter(poke=>
  {
    const withinRange = poke.weight>weight_range[0] && poke.weight<weight_range[1];
    const matchType = types.some(type=>poke.type.includes(type));
    return withinRange && matchType;

  }
  )
  filtered.forEach((poke, index)=>
  {
    const card = document.querySelector(`#${poke.name}`);
    card.style.order = index;
  })
}

