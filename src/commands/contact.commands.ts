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

    deleteContact(index: number): void{
        try {
            const contacts = contactQuery.getContacts();
            const deletedcontacts = contacts.splice(index, 1);
            localStorage.setItem('contact', JSON.stringify(contacts));      
        }
        catch(e) {
            throw new TypeError(`an error happened ${e}`);
        } 
    },

    favContact(index: number): void{
        try {
            let flag =true;
            const favoris = contactQuery.getFavoris();
            const contacts = contactQuery.getContacts();
            const contact : Contact =contacts[index];  
            favoris.forEach(contactlist => {
                if(contactlist.nom==contact.nom && contactlist.prenom==contact.prenom){
                    flag=false;
                }             
            });
            if(flag==true){
                favoris.push(contact);
                localStorage.setItem('favoris', JSON.stringify(favoris));
            }
        }
        catch(e) {
            throw new TypeError(`an error happened ${e}`);
        }
    },

    removeFavoris(index: number): void{
        try {
            const contacts = contactQuery.getFavoris();
            const deletedcontacts = contacts.splice(index, 1);
            localStorage.setItem('favoris', JSON.stringify(contacts));      
        }
        catch(e) {
            throw new TypeError(`an error happened ${e}`);
        } 
    }
}