document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    const target = this.getAttribute('href');

    // Ignora links vazios (#)
    if(target === "#") return;

    e.preventDefault();

    const element = document.querySelector(target);

    if(element){
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });

});