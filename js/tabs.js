const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');

const changeContent = (array, value) => {
  array.forEach((image) => {
    if (image.dataset.tabsField === value) {
      image.classList.remove('hidden');
    } else {
      image.classList.add('hidden');
    }
  });
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener('click', (event) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);
    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    });
  });
});
