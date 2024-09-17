const express = require('express')
var bodyParser = require('body-parser')
const userModel = require("./mongodbtest")
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('Facebook server backend API is running..')
})

app.get('/users', function(req, res){

    // get required info from req object
    // query db based on req and collect data
    // format data

  let userslist = [{"name": "salelem"}, {"name": "gulab"}]

  res.send(userslist)

}
)

app.post("/signup", (req, res)=>{

    let data =  req.body;
    console.log(data)
    // insert data to db
    if(!data.username){
      res.send({message: "username is required!", status: 201})
    }

    let userObj = {
      username: data.username,
      password: data.password
    }
   
    userModel.create(data)
    .then((data)=>{

      
      res.send(data)

    })
    .catch((err)=>{
      res.send(err)
    })
    // send response

    // res.send({data: data, message: "sign up success"})

})
app.get("/userslist", function(req, res){

  let queryParams = req.query
  console.log(queryParams)

  let query = {username: queryParams.username}

  let dbQuery = {}
  if(query.username){
  dbQuery = query
  }


  userModel.find(dbQuery).then((data)=>{

    res.send(
      {
        count: data.length,
        list: data,
        message: "success"
        
      }
    )

  })
  .catch((err)=>{
    res.send(err)
  })
})


app.listen(3000, function(){
    console.log("server is running")
})