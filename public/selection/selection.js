// modal
async function ButtonClicked() {

  document.getElementById("modal").style.display = "block"
  let values = []
  let checkboxes = document.querySelectorAll('input:checked')

  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value)
  })

   values.join(',')

async function saveRecipe() {
   // fill with info to save to flashcard
   })

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
  // document.getElementById('image').src = ""

 try{
   // here to display on modal
  const url = "/api?ingredients=" + values
  const rawRes = await fetch(url)
  const rawResJSON = await rawRes.json()
  console.log("raw res json", rawResJSON)

  for (i = 0; i < rawResJSON.length; i++) {
    console.log("raw res json[i]",rawResJSON[i])
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

      // document.getElementById('image').src = rawResJSON[i].img

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

function closeModal() {
document.getElementById("modal").style.display = "none"
}


// grab the elements
// const document.querySelector = selector => {
//   const element = document.querySelector(selector)
//   //add validation
// 	if(element) return element
// 	throw new Error('uh oh')
// };

console.log(document.querySelector('.navbar'));

//nav styles on scroll
const scrollHeader = () => {
  const headerElement = document.querySelector('#header')
  if(this.scrollY >= 15){
	headerElement.classList.add('activated')
  } else{
	headerElement.classList.remove('activated')
  }
}
window.addEventListener('scroll', scrollHeader)
//search

//open menu

const menuToggleIcon = document.querySelector('#menu-toggle-icon')

const toggleMenu = () => {
const mobileMenu = document.querySelector('#menu')
  mobileMenu.classList.toggle('activated')
  menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', toggleMenu)

const formOpenBtn = document.querySelector('#search-icon')
const formCloseBtn = document.querySelector('#form-close-btn')
const searchFormContainer = document.querySelector('#search-form-container')
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
const themeToggleBtn = document.querySelector('#theme-toggle-btn')
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
