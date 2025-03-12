console.log("ciao linda");
const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// PRENDO GLI ELEMENTI IN PAGINA
//PRENDO CONTAINER
const containerElement = document.getElementById("team-container");
console.log(containerElement);

//SVUOTO IL CONTAINER
containerElement.innerHTML = ""; //CON QUESTO COMANDO SVUOTO LA PARTE DI HTML
// CICLO FOR PER VEDERE I MEMBRI DEL TEAM
//METODO CON CICLO FOR
/*
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member);
  //AGGIUNGO AL FOGLIO HTML
  const cardHTML = `<div id="card">
        <img src="${member.img}" alt="${member.name}" />
        <div id="info">
          <h3 id="name">${member.name}</h3>
          <p id="role">${member.role}</p>
          <a href="#" id="mail">${member.email}</a>
        </div>
      </div>
      `;
  containerElement.innerHTML += cardHTML;
}
  */

//aggangio risultato a un elemento parent
renderHTML(containerElement, teamMembers);
//METODO CON FUNZIONE
function renderHTML(parent, elements) {
  let items = "";
  for (let i = 0; i < elements.length; i++) {
    const currentElement = elements[i];
    items += createHTMLElement(currentElement);
  }
  //metterò nell'innerHTML del parent il risultato prodotto
  parent.innerHTML = items;
}

function createHTMLElement(obj) {
  return `<div id="card">
        <img src="${obj.img}" alt="${obj.name}" />
        <div id="info">
          <h3 id="name">${obj.name}</h3>
          <p id="role">${obj.role}</p>
          <a href="#" id="mail">${obj.email}</a>
        </div>
      </div>
      `;
}
