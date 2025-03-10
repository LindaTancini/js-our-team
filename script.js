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
//PRENDO IMMAGINE
const imageElement = document.querySelector("img");
console.log(imageElement);
//PRENDO NOME
const nameElement = document.getElementById("name");
console.log(nameElement);
//PRENDO RUOLO
const roleElement = document.getElementById("role");
console.log(roleElement);
//PRENDO EMAIL
const mailElement = document.getElementById("mail");
console.log(mailElement);

// CICLO FOR PER VEDERE I MEMBRI DEL TEAM
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member);
}
