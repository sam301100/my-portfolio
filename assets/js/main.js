/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){

    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) =>{
  mb.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    modalViews.forEach((mv) => {
      mv.classList.remove('active-modal')
    })

  })
});


/*=============== TIMELINE TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('timeline__active')
    })

    target.classList.add('timeline__active')

    tabs.forEach(tab => {
      tab.classList.remove('timeline__active')
    })

    tab.classList.add('timeline__active')


  })
});




/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});



/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')

}

linkWork.forEach(l=> l.addEventListener('click', activeWork))



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//   	const scrollY = window.pageYOffset
//
// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
//
// 		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link')
// 		}else{
// 			sectionsClass.classList.remove('active-link')
// 		}
// 	})
// }
// window.addEventListener('scroll', scrollActive)

// var header = document.getElementById("header");
// var btns = header.getElementsByClassName("nav__link");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active-link");
//   current[0].className = current[0].className.replace(" active-link", "");
//   this.className += " active-link";
//   });
// }

/*=============== LIGHT DARK THEME ===============*/


const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll` , {delay: 900, origin: 'bottom'})



// ================ CONTACT FORM ================================

//emailjs.init("_vG0VrvNLeDgWvnys");
// var form = document.getElementById("contact-form");
//
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // prevent the form from submitting
//
//   var nameInput = document.querySelector(".contact__form-input[name='name']");
//   var name = nameInput.value;
//
//   var emailInput = document.querySelector(".contact__form-input[name='email']");
//   var email = emailInput.value;
//
//   var projectInput = document.querySelector(".contact__form-input[name='project']");
//   var project = projectInput.value;

  // console.log("name" , name);
  //
  // console.log("email", email);
  //
  // console.log("project", project);

//   var templateParams = {
//     name: name,
//     email: email,
//     project: project
//   };
//
//   emailjs.send("sams_service_id", "template_avmvuda", templateParams)
//     .then(function(response) {
//
//       const alert = document.createElement('div');
//       alert.classList.add('alert', 'alert-success');
//       alert.textContent = "Thank you for reaching out! I'm excited to hear from you and appreciate your interest in getting in touch. I'll get back to you as soon as possible. In the meantime, feel free to browse my portfolio to see examples of my previous work!";
//       form.appendChild(alert);
//
//
//       // alert("Thank you for reaching out! I'm excited to hear from you and appreciate your interest in getting in touch. I'll get back to you as soon as possible. In the meantime, feel free to browse my portfolio to see examples of my previous work!")
//       // console.log("Email sent:", response);
//     }, function(error) {
//       console.error("Email failed to send:", error);
//     });
// });


// Get the form element and add an event listener for when it's submitted

emailjs.init("RIpwqmILoLPluLZlL");

const form = document.querySelector('.contact__form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the values from the form
  const name = form.querySelector('.contact__form-input[name="name"]').value;
  const email = form.querySelector('.contact__form-input[name="email"]').value;
  const message = form.querySelector('.contact__form-input[name="project"]').value;

  // Use EmailJS to send the email
  emailjs.send("sams_service_id", "template_avmvuda", { name, email, message })
    .then(() => {
      // Show a success message
      const overlay = document.querySelector('.alert-overlay');
      const messageBox = overlay.querySelector('.alert-message');
      // messageBox.textContent = "Thank you for reaching out! \nI'm excited to hear from you and appreciate your interest in getting in touch. \nI'll get back to you as soon as possible. \nIn the meantime, feel free to browse my portfolio to see examples of my previous work!";
      messageBox.textContent = "Thank you for reaching out!\nI'm excited to hear from you and appreciate your interest in getting in touch.\nI'll get back to you as soon as possible.\nIn the meantime, feel free to browse my portfolio to see examples of my previous work!";
      overlay.style.display = 'block';

      // Clear the form
      form.reset();
    })
    .catch(() => {
      // Show an error message
      const overlay = document.querySelector('.alert-overlay');
      const messageBox = overlay.querySelector('.alert-message');
      messageBox.textContent = 'There was an error sending your message. Please try again later.';
      overlay.style.display = 'block';
    });
});

// Add an event listener for the close button
const overlay = document.querySelector('.alert-overlay');
const closeButton = overlay.querySelector('.close');
closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});
