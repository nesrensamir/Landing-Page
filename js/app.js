/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sec = document.querySelectorAll("section");
const Nav =document.getElementById("navbar__list");
sec.forEach((elm) => {     // loop in sections 
let iD =elm.getAttribute('id');
const newItem ='<li> <a ></a> </li>' ;
Nav.insertAdjacentHTML("beforeend",newItem);
const Link = Nav.lastElementChild.firstElementChild; // choose <a>
Link.setAttribute('href',"#"+iD) // add link 
Link.insertAdjacentText("afterbegin",iD); // add text to elment <a>
Link.setAttribute('data-nav',iD)
});

// Add class 'active' to section when near top of viewport
document.addEventListener( 'scroll' , function (){
sec.forEach((elm)=>{ 
    let activeLink = Nav.querySelector(`[data-nav=${elm.id}]`); 
if (elm.getBoundingClientRect().top>= -129.60000610351562 && elm.getBoundingClientRect().bottom<=847.8750305175781)
{
    elm.classList.add("your-active-class");
    activeLink.classList.add("active-link");
} 
else { elm.classList.remove("your-active-class");
activeLink.classList.remove("active-link");}

});
 });

// Scroll to anchor ID using scrollTO event







/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

Nav.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.dataset.nav) {
      document
      .getElementById(`${event.target.dataset.nav}`)
       .scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        location.hash = `${event.target.dataset.nav}`;
      }, 200);
    }
  });
