import {Contact} from "@/domains/contact.interface" 
import contactQuery from "@/query/contact.query"

export default {
    createContact(contact: Contact): void{
        try {
            const contacts = contactQuery.getContacts();
            if (contact.nom!='' && contact.prenom!=''){
                contacts.push(contact);
                console.log(contact);
                localStorage.setItem('contact', JSON.stringify(contacts));
            }
        }
        catch(e) {
            throw new TypeError(`an error happened ${e}`);
        }
    },

    deleteContact(contact: Contact): void{
        try {
            const contacts = contactQuery.getContacts();
            contacts.forEach(contactlist => {
                if (contactlist.nom==contact.nom && contactlist.prenom==contact.prenom)
                {
                    console.log('oui');
                    contacts.splice(contacts.indexOf(contactlist), 1);
                    console.log('ok');
                }                
            });
        }
        catch(e) {
            throw new TypeError(`an error happened ${e}`);
        } 
    }
}