import { Contact } from "@/domains/contact.interface";

export default {
    getContacts(): Array<Contact> {
        const contacts = localStorage.getItem('contact') as string;
        const parsedContacts = JSON.parse(contacts);
        if(this.isContactListEmpty(parsedContacts)){
            return [];
        }
        return parsedContacts;
    },

    isContactListEmpty(contactList: Array<Contact>): boolean {
        if (contactList) {
            return false;
        }
        return true;
    }
}