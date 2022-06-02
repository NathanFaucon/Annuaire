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

    getFavoris(): Array<Contact> {
        const favoris = localStorage.getItem('favoris') as string;
        const parsedFavoris = JSON.parse(favoris);
        if(this.isContactListEmpty(parsedFavoris)){
            return [];
        }
        return parsedFavoris;
    },

    isContactListEmpty(contactList: Array<Contact>): boolean {
        if (contactList) {
            return false;
        }
        return true;
    },

    getLastId(){
        const id = localStorage.getItem('lastId');
        if (id=='') {
            console.log('null');
            return '0';
        }
        else {
            console.log('pas null');
            return id;
        }
    }
}