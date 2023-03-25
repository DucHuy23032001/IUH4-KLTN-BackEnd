const MONGOOSE = require("mongoose");
const DOTENV = require("dotenv");
const APP = require("./app");
const PORT = process.env.PORT;

// check
DOTENV.config({
    path: "./config.env",
});

MONGOOSE.connect(
    process.env.DATABASE,
    () => {
        console.log("Success");
    },
    (e) => console.error(e)
);

APP.listen(3000, () => {
  console.log(`Application is running on PORT 3000`);
});