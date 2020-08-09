const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: false
}));

const contacts = require("./routes/api/contacts");
const contactManager = require("./routes/api/contact-manager");

app.use("/api/contacts", contacts);
app.use("/api/contact-manager", contactManager);

// Handle production
if (process.env.NODE_ENV === "production") {
	// Static folder
	app.use(express.static(__dirname + "/public/"));
	// Handle SPA
	app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started on port 3000."));