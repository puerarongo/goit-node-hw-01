const fs = require("fs");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

const readData = data => { fs.readFile(data) };
const writeData = data => { fs.writeFile(data) };

module.exports = { readData, writeData };