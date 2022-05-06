// joke
const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('jokeButton')

jokeButton.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
	headers: {
	  Accept: 'application/json',
	},
  }

// 'config' is the const that holds the header: {Accept: 'application/json'} info
try {
  const res = await fetch('http://localhost:3000/api/joke', config)
  const data = await res.json()
  console.log("data", data)
  jokeElement.innerHTML = data.joke
} catch (err) {
	console.log(err)
}
}