const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const studentRoute = require("./routes/student.route.js");
let Country = require('country-state-city').Country;
let City = require('country-state-city').City;
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/students', studentRoute);

//End of the routes
mongoose.connect("mongodb+srv://danielyananna0:Zqzwy1XSiJZE2W91@backenddb.lqpbpda.mongodb.net/Node_API?retryWrites=true&w=majority&appName=BackendDB").then(()=>{
    console.log("connected to the DB");
    app.listen(3000, ()=>{
        console.log('Server is running on 3000 port')
    })
}).catch(()=>{
    console.log("Connection is failed");
})

app.get('/api/countries', (req, res) => {
    const countries = Country.getAllCountries();
    res.json(countries);
});

app.get('/api/cities/:countryId', (req, res) => {
    const { countryId } = req.params;
    const cities = City.getCitiesOfCountry(countryId);
    res.json(cities);
});
