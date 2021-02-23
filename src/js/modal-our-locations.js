(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ourlocations-open]'),
    closeModalBtn: document.querySelector('[data-ourlocations-close]'),
    modal: document.querySelector('[data-ourlocations]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("ourlocations-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();