var express = require("express");
var app = express();
var PORT = process.env.PORT || 8020;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

