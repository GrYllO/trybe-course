import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import Swal from 'sweetalert2';
import './style.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', () => {
  copy(displayPasswordEl.innerHTML);
  Swal.fire({
    icon: 'success',
    titleText: 'Agora basta colar!',
    text: 'Senha copiada para a área de transferência. 📋',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });
});
