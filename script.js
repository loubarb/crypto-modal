const buttons = document.querySelectorAll('button');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');

const handleButtonClick = (e) => {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const headline = card.querySelector('h2').textContent;
  const desc = card.querySelector('p').textContent;
  innerModal.innerHTML = `<h2>${headline}</h2>
  <p>${desc}</p>`;
  outerModal.classList.add('show');
}

const closeModal = () => {
  outerModal.classList.remove('show');
}

buttons.forEach((button) => button.addEventListener('click', handleButtonClick));
outerModal.addEventListener('click', closeModal)