const express = require("express");

const app = express();


//API Endpoint
app.get("/greet", (req, res) =>{
    const name = req.query.name || "World";
    res.json({
        message:`hi, ${name}!`
    })
});

// Start the server
const PORT =3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});