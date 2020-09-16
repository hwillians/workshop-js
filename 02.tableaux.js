var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach(function(element){
    console.log(element);
});

console.log(villes.every(function(element){
    return element.includes('a');
  }));

  