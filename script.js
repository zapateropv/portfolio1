// Get the navbar element
const navbar = document.getElementById('navbar');

// Listen for scroll events on the window
window.addEventListener('scroll', function() {
  // Calculate the scroll distance from the top
  const scrollPosition = window.scrollY;

  // Set navbar opacity based on scroll position
  if (scrollPosition > 50) { // Adjust this value as needed
    navbar.style.backgroundColor = ' rgba(26,26,36,0.8)' ; // Change navbar opacity to 1 when scrolling
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Change navbar opacity to 0.5 when not scrolling
  }
});



function scrollToTarget() {
    var targetElement = document.getElementById('aboutMe1');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Event listener to trigger scroll on button click
  document.getElementById('aboutMe').addEventListener('click', scrollToTarget);

  function scrollToTarget1() {
    var targetElement = document.getElementById('station1');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Event listener to trigger scroll on button click
  document.getElementById('station').addEventListener('click', scrollToTarget1);
//



function scrollToTarget3() {
    var targetElement = document.getElementById('home1');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

  // Event listener to trigger scroll on button click
  document.getElementById('home').addEventListener('click', scrollToTarget3);
 