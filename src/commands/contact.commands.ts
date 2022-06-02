import {Contact} from "@/domains/contact.interface" 
import contactQuery from "@/query/contact.query"

export default {
    createContact(contact: Contact): void{
        try {
            const contacts = contactQuery.getContacts();
            if (contact.nom!='' && contact.prenom!=''){
                const id = contactQuery.getLastId();
                contact.id = id;
                contacts.push(contact);
                localStorage.setItem('contact', JSON.stringify(contacts));
                if (id!=null){
                    let newId = parseInt(id);
                    newId+=1;
                    localStorage.setItem('lastId', JSON.stringify(newId));
                }
                else{
                    localStorage.setItem('lastId', JSON.stringify(0));
                }
                
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
            const favs = contactQuery.getFavoris();   
            favs.forEach(fav=> {
                if(fav.id==deletedcontacts[0].id) {
                    this.removeFavoris(favs.indexOf(fav));
                }           
            });
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
    },

    editContact(index: number, newcontact: Contact): void {
        try{
            const contacts = contactQuery.getContacts();
            contacts[index]=newcontact;
            const favoris = contactQuery.getFavoris();
            if (newcontact.nom!='' && newcontact.prenom!=''){
                localStorage.setItem('contact', JSON.stringify(contacts)); 
            }
            favoris.forEach(fav => {
                if (fav.id==newcontact.id)
                favoris[favoris.indexOf(fav)]=newcontact;   
                localStorage.setItem('favoris', JSON.stringify(favoris));
            });
        }
        catch(e){
            throw new TypeError(`an error happened ${e}`);
        }
    }
}