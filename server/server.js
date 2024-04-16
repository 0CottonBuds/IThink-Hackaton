const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8080;

app.use(cors());

app.get("/api/home", (req, res) =>{
    res.json({message: "Hello, world!"});
});

app.listen(PORT); () => {
    console.log(`Server started on ${PORT}`);
}; 

