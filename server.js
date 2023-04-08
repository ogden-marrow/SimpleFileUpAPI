const express = require("express");
const path = require("path");



const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/upload',
    (req, res) => {
        let tttt = req;
        console.log(tttt);
        return res.json({ status: 'success', message: "done" });
    }
);




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// this i a test to see the cool estidic of the temial interface omg like yes daddy this is so dope.


