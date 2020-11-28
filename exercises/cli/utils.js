const fs = require("fs");
const path = require("path");

// this path needs to be relative to work with fs
const contactsLocation = "contacts.json";

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const contactsFile = fs.readFileSync(path.join(contactsLocation)).toString();
  return JSON.parse(contactsFile);
};

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  fs.writeFileSync(path.join(contactsLocation), JSON.stringify(contacts));
};

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts,
};
