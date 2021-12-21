const express = require("express")
const app = express();
const port = 80;

app.use(express.static(__dirname));

app.get('/', (req, res) =>{
    res.redirect('/index.html');
});

app.listen(process.env.PORT, () => {
    console.log(`listening on ${port}`);
});