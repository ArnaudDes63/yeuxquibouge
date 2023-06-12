const container = document.querySelector('.container');
const balls = document.querySelectorAll('.ball');

container.addEventListener('mousemove' , (e) => {

   const x = `${e.clientX * 100 / window.innerWidth}%`
   const y = `${e.clientY * 100 / window.innerHeight}%`

   for(let i = 0; i < 2; i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = `translate(-${x}, -${y})`;
   }
})














































































/* Formulaire Ajoutez un Livre */ 


// const bookList = document.querySelector('.book-list');
// const bookForm = document.querySelector('.book-form');
// const container = document.querySelector('.container');


// class Book {
//    constructor(titre, auteur, annee){
//       this.titre = titre;
//       this.auteur = auteur;
//       this.annee = annee;
//    }

//    addBookToList(book){

//       const row = document.createElement('tr');

//       row.innerHTML = `
//       <td>${book.titre}</td>
//       <td>${book.auteur}</td>
//       <td>${book.annee}</td>
//       <td><button class="delete">X</button></td>`;

//       bookList.appendChild(row);
//    }
   
//    clearFiedls(){
//       document.getElementById('titre').value = "";
//       document.getElementById('auteur').value = "";
//       document.getElementById('annee').value = "";
//    }

//    showAlert(message, className){

//       const alert = document.createElement('div');
//       alert.className = `alert ${className}`;
//       alert.appendChild(document.createTextNode(message));
//       container.insertBefore(alert, bookForm);

//       setTimeout(() => {
//          document.querySelector('.alert').remove();         
//       }, 2500)
      
//    }
// }

// class Interface {

//    deleteBook(target){
//       if(target.className === "delete"){
//          target.parentElement.parentElement.remove();
//       }
//    }

// }

// bookForm.addEventListener('submit', (e) => {

//    e.preventDefault();

//    const titre = document.getElementById('titre').value;
//    const auteur = document.getElementById('auteur').value;
//    const annee = document.getElementById('annee').value;


//    const book = new Book(titre, auteur, annee);

//    if(titre === "" || auteur === "" || annee === ""){
//       book.showAlert('Remplissez les champs!', 'error');
//    } else {
      
//       book.addBookToList(book);
//       book.clearFiedls();
//       book.showAlert('Livre ajouté !', 'success');      
//    }  

// })

// bookList.addEventListener('click', (e) => {

//    const ui = new Interface();

//    ui.deleteBook(e.target)
// })


/* Fin Formulaire Ajoutez un Livre */







































































































// const nb = 10;

// if(nb === 100) {

//     console.log("Love");

// } else if (nb > 100){

//     console.log("Tageul");
// }else {
//     console.log("Je t'aime")
// }

// let prix = 20;

// let choix = prix > 200 ? "prenium" : "Basique";

// console.log(choix);

// for(let i = 100; i >= 0; i-- ){

//      console.log(i);
// }

// let mettreCarre = 100;

// console.log(mettreCarre > 70 ? "Grand Logement" : "Petit/Moyen Logement" );

// const titre = document.querySelector('h1');

// titre.style.color = "red";
// titre.style.fontSize = "70px";
// titre.style.background = "blue";

// const titre = document.querySelector("h1");

// titre.style.background = "blue"

// console.log(typeof titre);

// const titre = document.querySelector("h1");

// titre.addEventListener('click', fonctionAnimation);

// function fonctionAnimation() {

//     titre.style.color = 'red';
// }

// const prenom = "arnaud";

// if(prenom === "buc" || prenom === "arnaud") {
//     console.log("ok");
// }

// let prix = 500;

// console.log(`le choix est ${prix > 200 ? "Prenium" : "Basique"}`);

//  const arnaud = {
//     nom : "dessaint",
//     age : 31,
//       poid : 94,
//        taille : 175,
//        couleur : "rouge"
//   }

//     for( const detail in arnaud){
//          console.log(`${detail} : ${arnaud[detail]}`);
//    }

// let i = 10;

// while(i >= 0){
//     console.log(i);
//     i--
// }

// do{
//     console.log(i);
//     i--
// }
// while(i >= 0 );

// for(let i = 0 ; i <= 20; i++){
//     if(i ===  17){
//         continue;
//     }
//     if(i ===  18){
//         continue;
//     }
//         if(i ===  19){
//             continue;
//         }
//             if(i ===  20){
//                 continue;
//             }
//             console.log(i);
//         }


// const capitales = {
//   autriche: "Vienne",
//   argentine: "Buenos Aires",
//   estonie: "Tallinn",
//   australie: "Cambera",
// };

// for (const prop in capitales) {
//   console.log(`${prop} : ${capitales[prop]}`);
// }

// const fruits = ["Fraise", "Cerise", "Orange", "Ananas"];
// for (const element of fruits) {
//   console.log(element);
// }


// const form = document.querySelector('form');

// form.addEventListener('submit', function (e){
//     e.preventDefault();
// })


/*---------------------------------------------------------------------

/* Spread operator

// class Pays {
//    constructor(pop,nom,pib){
//       this.pop = pop;
//       this.nom = nom;
//       this.pib = pib;
//    }   
// }

// const France = new Pays (`70 Million`,`France`, `2000 De Chiffre`);


// console.log(France);

/*-----------------------------------------------------------------------

DESTRECTURING

const pays = {
   nom: 'Norvége',
   pop:9
}

let {nom,pop} = pays;
console.log(nom,pop);


--------


const tab = ['a','b'];
const[x,y]= tab;

console.log(x,y);



/*---------------------------------------------------------------------*/

// // EXERCICE 7 : JavaScript moderne


// /*1. Créez une fonction flêchée qui retourne "Hello World", 
// elle doit être écrite dans sa syntaxe la plus courte possible.
// (élégante)*/

// const hello = () => 'Hello World'

// console.log(hello());





// /* 2. Créez une classe Humain qui sert à créer des objets avec 
// deux propriétés : poids et taille.*/

// class Humain {
//    constructor(poids,taille){
//       this.poids = poids;
//       this.taille = taille;

//    }   
// }
 
// const Arnaud = new Humain(94,175);

// console.log(Arnaud);


/*------------------------------------------------------------------*/

// const nb = (a,b) => a * b;

// console.log(nb(15,2));


/*-------------------------------------------------------------*/

