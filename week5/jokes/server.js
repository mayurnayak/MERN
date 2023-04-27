const express = require("express");
const app = express();
    
require("./config/mongoose.config"); // calling the mongoose.config and running the connect function
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const JokesRoutes = require("./routes/jokesDB.routes");
JokesRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));






// client: npm install axios react-router-dom
// server: npm install express mongoose cors nodemon
