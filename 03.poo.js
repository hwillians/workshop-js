function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return nom + " " + prenom + ", " + pseudo;
    }
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77'), paul = new Personne('LEMAIRE', 'Paul', 'paul44')

console.log(jules.nom)
console.log(jules.prenom)
console.log(jules.pseudo)
console.log(jules.getNomComplet())

var afficherPersonne = function (Personne) {
   var i = 0
    for(i  in Personne)
    console.log(Personne[i])
}

afficherPersonne(paul)

jules.pseudo =  "jules44";

console.log(jules.getNomComplet())

console.log(jules.age)

Personne.prototype.age = 'NON RENSEIGNE';

console.log(jules.age)

jules.age = 30;

console.log(jules.age)

Personne.prototype.getInitiales = function(){
    return this.nom +this.prenom;
}

console.log(jules.getInitiales())