/* Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta
e primeiroFilhoDoFilho. */

const filhosDoAvo = document.querySelectorAll("section");
const textoAlerta = document.getElementById("warningText");

// Remove todos os filhos exceto os indicados
for (i = 0; i < filhosDoAvo.length; i += 1) {
  let filhoDoAvo = filhosDoAvo[i];
  if (
    filhoDoAvo.id !== "pai" &&
    filhoDoAvo.id !== "elementoOndeVoceEsta" &&
    filhoDoAvo.id !== "primeiroFilhoDoFilho"
  ) {
    filhoDoAvo.remove();
  }
}
textoAlerta.innerHTML = "";
