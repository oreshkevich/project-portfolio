const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');

const allLinks = [...links, btn];

allLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);

    if (section) {
      // section.scrollIntoView({
      //   block: 'start',
      //   behavior: 'smooth',
      // });
      seamless.scrollIntoView(section, {
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  });
});
