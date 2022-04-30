//grab the elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  //add validation
    if(element) return element;
  throw new Error('uh oh');

};

// console.log(selectElement('.navbar'));

//nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header');
  if(this.scrollY >= 15){
    headerElement.classList.add('activated');
  } else{
    headerElement.classList.remove('activated')
  }
}


window.addEventListener('scroll', scrollHeader)
//search


//open menu

const menuToggleIcon = selectElement('#menu-toggle-icon')

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu')
  mobileMenu.classList.toggle('activated')
  menuToggleIcon.classList.toggle('activated')
}


menuToggleIcon.addEventListener('click', toggleMenu)

const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');
//open search form
formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
//close search form
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));
//close the search form on esc key
window.addEventListener('keyup', event => {
  if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
})
//switch theme

//define a variable to store in the body element
const bodyElement = document.body
const themeToggleBtn = selectElement('#theme-toggle-btn')
// get a current item in local storage
const currentTheme = localStorage.getItem('currentTheme')

if(currentTheme){
  bodyElement.classList.add('light-theme')
}
themeToggleBtn.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme') //light theme added


  if(bodyElement.classList.contains('light-theme')){
    //set current theme to local storage
    localStorage.setItem('currentTheme', 'themeActive')
  } else{
      localStorage.removeItem('currentTheme')
  }
})
//swipes