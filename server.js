const express = require('express')
const app = express()  //create new express app
const port = 3000;  //using designated port number on front end to access back end

const {MongoClient} = require('mongodb')  //create a new mongoDB client
const url = "mongodb+srv://krshinn:pickspicks@cluster0.oam60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)

app.use(express.static('public'))  //allows you to pass json data from front end to back end
app.use(express.urlencoded({extended:true})) //allows you to access req.body


app.use(express.static("public/logIn"))

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/logIn/logIn.html")
})

app.use(express.static("public/welcome"))
app.get('/welcome', (request, res) => {
	res.sendFile(__dirname + "/public/welcome/welcome.html")
})

app.use(express.static("public/loginFail"))
app.get('/loginFail', (request, res) => {
	res.sendFile(__dirname + "/public/fail/fail.html")
})
app.use(express.static("public/selection"))
app.get('/selection', (request, res) => {
	res.sendFile(__dirname + "/public/selection/selection.html")
})
//function to verify log-in data
app.get('/api', (req,res) => {

  let ingredients = req.query.ingredients.split(',') //variable to search by


  async function postRecipe() {
  await client.connect()
  const collection = client.db('test_db').collection('test_recipe')

  let findIngredients = await collection.find(
  { searchedIngredients: { $all: ingredients } } ).toArray()

  await client.close()
	if (findIngredients !== null) {
	  console.log(findIngredients)
	  res.send(findIngredients)
	} else {
	  console.log('error')
	  res.sendStatus(400)
	}
  }
  postRecipe()
})

app.get('/api/joke', (req, res) => {
	async function joke() {
		await client.connect()
		const collection = client.db('test_db').collection('jokes')
		const result = await collection.aggregate([{ $sample: { size: 1 } }]).toArray()
		res.send(result[0])
		await client.close
	}
	joke()
})

























app.listen(port)

