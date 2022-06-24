const fs = require("fs");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");


//! function 
function listContacts() {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            return console.error(error);
        }
        return console.table(JSON.parse(data));
    });
};

function getContactById(id) {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            return console.error(error);
        }
        const found = JSON.parse(data).filter(elem => elem.id === id.toString());
        if (found.length < 1) {
            return console.log("Sorry, this person is not in the contact database!");
        }
        return console.table(found);
    });
};



function removeContact(id) {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            return console.error(error);
        }
        const found = JSON.parse(data).filter(elem => elem.id !== id.toString());
        if (found.length === JSON.parse(data).length) {
            return console.log("Sorry, this person is not in the contact database!");
        }
        fs.writeFile(contactsPath, JSON.stringify(found, null, '\t'), (error) => {
            if (error) {
                return console.error(error);
            }
            return listContacts();
        });
    });
};



function addContact(name, email, phone) {
    fs.readFile(contactsPath, "utf-8", (error, data) => {
        if (error) {
            return console.error(error);
        }

        const coincidence = JSON.parse(data).filter(elem => elem.name === name.toString());
        if (coincidence.length >= 1) {
            return console.log("This name already exists in the database!")
        }

        const id = JSON.parse(data).length + 1;
        const newContact = { id: id.toString(), name, email, phone };
        const dataContacts = [...JSON.parse(data), newContact];
        fs.writeFile(contactsPath, JSON.stringify(dataContacts, null, '\t'), (error) => {
            if (error) {
                return console.error(error);
            }
            return listContacts();
        });
    });
};


//addContact("Victor Close", "vicclose@mail.com", "222-11-22")

module.exports = { listContacts, getContactById, removeContact, addContact };