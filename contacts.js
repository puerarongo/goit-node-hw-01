const fs = require("fs");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");


//! function 
async function listContacts() {
    console.log("listContacts")
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.error(error);
        }
        return console.log(data);
    });
};

function getContactById(id) {
    console.log("getContactById");
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.error(error);
        }
        const found = JSON.parse(data).filter(elem => elem.id === id.toString());
        if (found.length < 1) {
            return console.log("Sorry, this person is not in the contact database!");
        }
        return console.log(found);
    });
};

//function removeContact(contactId) {
//  console.log("removeContact")
//  fs.readFile(contactsPath, "utf-8").then(data => {
//    const found = JSON.parse(data).filter(elem => elem.id === id.toString())
//    if (found.length < 1) {
//      return console.log("Sorry, this person is not in the contact database!");
//    }
//
//  });
//}


function addContact(name, email, phone) {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            console.error(error);
        }
        const coincidence = JSON.parse(data).filter(elem => elem.name === name.toString())
        console.log(coincidence)
        if (coincidence.length >= 1) {
            return console.log("This name already exists in the database!")
        }
        const dataContact = [...JSON.parse(data), { name, email, phone }]
        fs.writeFile(contactsPath, JSON.stringify(dataContact), () => {
            return listContacts();
        })
    });
};

//listContacts();
//getContactById(2);
addContact("Alex Cross", "across@mail.com", "222-22-22")

//module.exports = { listContacts };