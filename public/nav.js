// modal
async function ButtonClicked() {

  let values = []
  let checkboxes = document.querySelectorAll('input:checked')

  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value)
  })

   values.join(',')


  const title = document.getElementById('title')
  const ingredients =
   document.getElementById('ingredients')
  const nutrition = document.getElementById('nutrition')
  const prep = document.getElementById('prep')
  const time = document.getElementById('time')
  const error = document.getElementById('error')

  title.innerHTML = ""
  ingredients.innerHTML = ""
  nutrition.innerHTML = ""
  prep.innerHTML = ""
  time.innerHTML = ""
  document.getElementById('image').src = ""

 try{
   const url = "/api?ingredients=" + values
  const rawRes = await fetch(url)
  const rawResJSON = await rawRes.json()

  for (i = 0; i < rawResJSON.length; i++) {
    if (rawResJSON[i] != null) {

    title.innerHTML += `<div id="title-cont"> ${rawResJSON[i].title} </div>`

    time.innerHTML += `<div id="time-cont"> ${rawResJSON[i].time} </div>`


    for (x = 0; x < rawResJSON[i].nutrition.length; x++) {
      nutrition.innerHTML += `
        <div id="nutrition-cont">
        <ul><li>${rawResJSON[i].nutrition[x]}</li></ul>
        </div>
        `
      }


    for (y = 0; y < rawResJSON[i].prep.length; y++) {
      prep.innerHTML += `
        <div id="prep-cont">
        <p>${rawResJSON[i].prep[y]}</p>
        </div>
        `
      }


      for (z = 0; z < rawResJSON[i].ingredients.length; z++) {
      ingredients.innerHTML += `
        <div id="nutrition-cont">
        <ul><li> ${rawResJSON[i].ingredients[z]} </li></ul>
        </div>
        `
      }

      document.getElementById('image').src = rawResJSON[i].img

      document.getElementById("modal").style.display = "block"
    }
    }
  }



  catch {
    console.log('err')
    error.innerText = "There are no recipies that fit your search"
  }
  // values = []
  // console.log(values)
}

//grab the elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  //add validation
	if(element) return element
	throw new Error('uh oh')
};

// console.log(selectElement('.navbar'));

//nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement('#header')
  if(this.scrollY >= 15){
	headerElement.classList.add('activated')
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

const formOpenBtn = selectElement('#search-icon')
const formCloseBtn = selectElement('#form-close-btn')
const searchFormContainer = selectElement('#search-form-container')
//open search form
formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'))
//close search form
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'))
//close the search form on esc key
window.addEventListener('keyup', event => {
  if(event.key === 'Escape') searchFormContainer.classList.remove('activated')
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
