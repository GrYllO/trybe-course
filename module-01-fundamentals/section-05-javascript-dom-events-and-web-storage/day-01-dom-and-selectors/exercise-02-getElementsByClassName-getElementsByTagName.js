const paragraph = document.getElementById("paragraph");

paragraph.style.color = "red";

// Adicione uma classe igual para os dois parágrafos;

// Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
const paragraphs = document.getElementsByClassName("paragraph");

// Altere algum estilo do primeiro deles;
paragraph.style.border = "1px solid red";

// Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
const subtitle = document.getElementsByTagName("h4");

subtitle[0].style.color = "purple";
