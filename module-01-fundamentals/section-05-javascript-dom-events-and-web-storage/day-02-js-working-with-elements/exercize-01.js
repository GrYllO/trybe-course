// Acesse o elemento elementoOndeVoceEsta.
const elementWhereYouAre = document.getElementById("elementoOndeVoceEsta");

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementWhereYouAre.parentElement.style.color = "red";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const firstChildElement = document.getElementById("primeiroFilhoDoFilho");
firstChildElement.innerText = "imagine um texto bem legal aqui";

// Acesse o primeiroFilho a partir de pai.
const father = document.getElementById("pai");
father.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
elementWhereYouAre.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
elementWhereYouAre.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
elementWhereYouAre.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
father.children[2];