document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  const btnsN = document.querySelectorAll('.buttons-next');
  const btnsP = document.querySelectorAll('.buttons-previous');
  const sections = document.querySelectorAll('.card-img');
  btnsN[0].addEventListener('click', () => {
    sections[1].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  btnsN[1].addEventListener('click', () => {
    sections[2].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  btnsN[2].addEventListener('click', () => {
    sections[3].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  btnsN[3].addEventListener('click', () => {
    sections[4].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });

  btnsP[0].addEventListener('click', () => {
    sections[0].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  btnsP[1].addEventListener('click', () => {
    sections[1].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  btnsP[2].addEventListener('click', () => {
    sections[2].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
  btnsP[3].addEventListener('click', () => {
    sections[3].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
 

})
