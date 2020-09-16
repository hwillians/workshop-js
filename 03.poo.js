function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + ' ' + this.prenom + ', ' + this.pseudo;
    }
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77'), paul = new Personne('LEMAIRE', 'Paul', 'paul44')

console.log(jules.nom)
console.log(jules.prenom)
console.log(jules.pseudo)
console.log(jules.getNomComplet())

var afficherPersonne = function (Personne) {
    console.log(Personne.nom)
    console.log(Personne.prenom)
    console.log(Personne.pseudo)
    console.log(Personne.getNomComplet())
}

afficherPersonne(paul)

jules.pseudo = 'jules44';

console.log(jules.getNomComplet())

console.log(jules.age)

Personne.prototype.age = 'NON RENSEIGNE';

console.log(jules.age)

jules.age = 30;

console.log(jules.age)

Personne.prototype.getInitiales = function () {

    return this.nom.charAt(0) + this.prenom.charAt(0);
}

console.log(jules.getInitiales())

var robert = {
    nom: 'LEPREFET',
    prenom: 'Robert',
    pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + " " + this.prenom + ", " + this.pseudo
    }
};
afficherPersonne(robert)

function Client(numeroClient, nom, prenom, pseudo) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return this.prenom + " " + this.nom + " " + this.numeroClient;
    }
}


var steve = new Client('A01', 'Steve', 'LUCAS', 'steve44');

afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());
