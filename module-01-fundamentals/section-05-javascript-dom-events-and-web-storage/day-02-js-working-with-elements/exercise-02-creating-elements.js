// Função simples para criar filhos
const singleChildCreator = (
  parentElementId,
  elementName,
  selectorType,
  selectorName
) => {
  const parentElement = document.getElementById(parentElementId);
  const newChild = document.createElement(elementName);
  newChild.setAttribute(selectorType, selectorName);
  parentElement.appendChild(newChild);
};

// Crie um irmão para elementoOndeVoceEsta.
singleChildCreator("pai", "section", "id", "novoIrmaoDeOndeVoceEsta");

// Crie um filho para elementoOndeVoceEsta.
singleChildCreator(
  "elementoOndeVoceEsta",
  "section",
  "id",
  "novoFilhoDeOndeVoceEsta"
);

// Crie um filho para primeiroFilhoDoFilho.
singleChildCreator(
  "primeiroFilhoDoFilho",
  "section",
  "id",
  "novoFilhoDoPrimeiroFilhoDoFilho"
);

// A partir desse filho criado, acesse terceiroFilho.
const novoFilhoDoPrimeiroFilhoDoFilho = document.getElementById(
  "novoFilhoDoPrimeiroFilhoDoFilho"
);

novoFilhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
