const title = document.getElementById('page-title');
const subtitle = document.getElementById('subtitle');
const paragraph = document.getElementById('paragraph');
const secondParagraph = document.getElementById('second-paragraph');

paragraph.style.color = 'red';

/* Recupere o elemento que contém o título da página e faça algo com ele, como
alterá-lo para o nome do seu filme favorito. */
title.innerText = 'Coach Carter - Treino para a Vida';

// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
secondParagraph.innerText = 'Richmond, Califórnia, 1999. O dono de uma loja de artigos esportivos, Ken Carter (Samuel L. Jackson), aceita ser o técnico de basquete de sua antiga escola, onde conseguiu recordes e que fica em uma área pobre da cidade. Para surpresa de muitos ele impõe um rígido regime, em que os alunos que queriam participar do time tinham de assinar um contrato que incluía um comportamento respeitoso, modo adequado de se vestir e ter boas notas em todas as matérias. A resistência inicial dos jovens acaba e o time sob o comando de Carter vai se tornando imbatível. Quando o comportamento do time fica muito abaixo do desejável Carter descobre que muitos dos seus jogadores estão tendo um desempenho muito fraco nas salas de aula. Assim Carter toma uma atitude que espanta o time, o colégio e a comunidade.';
secondParagraph.style.width = '75%';

// Por fim, recupere o subtítulo e altere-o também.
subtitle.innerText = 'Sinopse';