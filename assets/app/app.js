document.addEventListener('DOMContentLoaded', function() {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

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

  const btnsN = document.getElementsByClassName('buttons-next');
  const btnsP = document.getElementsByClassName('buttons-previous');
  const sections = document.getElementsByClassName('card-img');

  for (let i = 0; i < btnsN.length; i++) {
    let button = btnsN[i];
    button.addEventListener('click', () => {
      // console.log(i)
      sections[i + 1].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    });
  }
  for (let i = 0; i < btnsP.length; i++) {
    let button = btnsP[i];
    button.addEventListener('click', () => {
      // console.log(i)
      sections[i-1].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    });
  }
});
