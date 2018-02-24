const logoContainer = document.querySelector('.logo-container');
const logo = document.querySelector('.logo');
const outerNavContainer = document.querySelector('.outer-nav-container');

window.onscroll = function() {
  if (pageYOffset > 50) {
    logoContainer.style.backgroundColor = '#fff';
    logo.style.color = '#333';
    logoContainer.style.boxShadow = '0px 1px 0px 0px rgba(0,0,0,0.25)';
    outerNavContainer.style.boxShadow = '0px 1px 0px 0px rgba(0,0,0,0.25)';
    outerNavContainer.style.backgroundColor = '#fff';
  } else if (pageYOffset < 50) {
    logoContainer.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    logo.style.color = '#eee';
    logoContainer.style.boxShadow = 'none';
    outerNavContainer.style.boxShadow = 'none';
    outerNavContainer.style.backgroundColor = 'none';
  }
}