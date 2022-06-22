const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

fs.readFile(contactsPath).then(data => console.log(data.toString())).catch(error => console.error(error))

//! function 
function listContacts() {
    console.log("listContacts")
    return fs.readFile(contactsPath)
        .then(data => console.log(data.toString()))
        .catch(error => console.error(error));
};

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
};

listContacts();

module.exports = { };