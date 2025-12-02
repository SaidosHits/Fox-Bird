

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('.header-nav-links_small_dis');
  const menuButton = document.querySelector('.nav_menu_button');
  const closeButton = document.querySelector('.header-close-btn');
  const overlay = document.querySelector('.header_overlay-bg');
  const body = document.body;

  if (!navLinks || !menuButton || !closeButton || !overlay) return;

  // openmenu function

  const openMenu = () => {
    navLinks.classList.add('active');
    overlay.classList.add('active');
    closeButton.classList.add('active');
    body.classList.add('active');
  };

  // closemenu function 

  const closeMenu = () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    closeButton.classList.remove('active');
    body.classList.remove('active');
  };

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', ()=> {
  const faqItems = document.querySelectorAll('.faq_item');
  faqItems.forEach(item => {
    const answers = item.querySelector('.faq-answer');
    const question = item.querySelector('.faq-quetions');
    const arrow = item.querySelector('.arrow-icon');
    console.log(answers);
    question.addEventListener('click', () => {
      answers.classList.toggle('active');
      arrow.classList.toggle('rotate');
    });
  })
})
