const submenus = document.querySelectorAll('.submenu');

submenus.forEach((submenu) => {
  const listItems = submenu.querySelectorAll('li');

  listItems[1].addEventListener('mouseover', () => {
    submenu.classList.add('hide-submenu');
  });

  listItems[0].addEventListener('mouseover', () => {
    submenu.classList.remove('hide-submenu');
  });
});
