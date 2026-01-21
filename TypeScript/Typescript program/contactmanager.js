// Class
var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully: ".concat(contact.name));
    };
    ContactManager.prototype.viewContacts = function () {
        return this.contacts;
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var contact = this.contacts.find(function (c) { return c.id === id; });
        if (!contact) {
            console.error("Error: Contact with ID ".concat(id, " does not exist."));
            return;
        }
        Object.assign(contact, updatedContact);
        console.log("Contact with ID ".concat(id, " modified successfully."));
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = this.contacts.findIndex(function (c) { return c.id === id; });
        if (index === -1) {
            console.error("Error: Contact with ID ".concat(id, " does not exist."));
            return;
        }
        this.contacts.splice(index, 1);
        console.log("Contact with ID ".concat(id, " deleted successfully."));
    };
    return ContactManager;
}());
// Testing Script
var manager = new ContactManager();
// Add contacts
manager.addContact({
    id: 1,
    name: "veer",
    email: "veer123@example.com",
    phone: "1234567890"
});
manager.addContact({
    id: 2,
    name: "radhe",
    email: "jane@example.com",
    phone: "9876543210"
});
// View contacts
console.log("All Contacts:");
console.log(manager.viewContacts());
// Modify contact
manager.modifyContact(1, {
    email: "john.doe@newmail.com"
});
// Delete contact
manager.deleteContact(2);
// Try deleting non-existing contact
manager.deleteContact(5);
// Final contact list
console.log("Final Contacts:");
console.log(manager.viewContacts());
