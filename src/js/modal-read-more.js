(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-readmore-open]'),
    closeModalBtn: document.querySelector('[data-readmore-close]'),
    modal: document.querySelector('[data-readmore]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("readmore-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();