let cousins = [
  {
    prenom: "Bebere",
    age: 45,
    sex: "fille",
    beaute: true,
  },
  {
    prenom: "Bernie",
    age: 38,
    sex: "fille",
    beaute: false,
  },
  {
    prenom: "Berthe",
    age: 68,
    sex: "fille",
    beaute: false,
  },
  {
    prenom: "Ordonnance",
    age: 22,
    sex: "fille",
    beaute: true,
  },
  {
    prenom: "Glaire",
    age: 72,
    sex: "fille",
    beaute: false,
  },
  {
    prenom: "Bizonne",
    age: 38,
    sex: "fille",
    beaute: true,
  },
  {
    prenom: "Geraldine",
    age: 63,
    sex: "fille",
    beaute: false,
  },
];

let presentation = (couz) => {
  let isNice = couz.beaute ? " jolie" : " pas jolie";
  let retraite = couz.age > 70 ? ", qui est a la retraite" : ", en activité";
  document.body.innerHTML +=
    "<p>" +
    couz.prenom +
    " a " +
    couz.age +
    " ans, c'est une " +
    couz.sex +
    isNice +
    retraite +
    "." +
    "</p>";
};

// presentation(cousins[0]);
// presentation(cousins[1]);
// presentation(cousins[2]);
// presentation(cousins[3]);
// presentation(cousins[4]);
// presentation(cousins[5]);
// presentation(cousins[6]);

for (let i = 0; i < cousins.length; i++) {
  console.log(presentation(cousins[i]));
}
