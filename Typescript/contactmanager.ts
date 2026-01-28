// Interface
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

// Class
class ContactManager {
    private contacts: Contact[] = [];

    addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log(`Contact added successfully: ${contact.name}`);
    }

    viewContacts(): Contact[] {
        return this.contacts;
    }

    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const contact = this.contacts.find(c => c.id === id);

        if (!contact) {
            console.error(`Error: Contact with ID ${id} does not exist.`);
            return;
        }

        Object.assign(contact, updatedContact);
        console.log(`Contact with ID ${id} modified successfully.`);
    }

    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);

        if (index === -1) {
            console.error(`Error: Contact with ID ${id} does not exist.`);
            return;
        }

        this.contacts.splice(index, 1);
        console.log(`Contact with ID ${id} deleted successfully.`);
    }
}

// Testing Script
const manager = new ContactManager();

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
