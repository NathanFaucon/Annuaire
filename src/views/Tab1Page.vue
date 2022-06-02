<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nouveau Contact</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Nouveau Contact</ion-title>
        </ion-toolbar>
      </ion-header>
      <div>
        <form>
          <ion-item>
            <ion-label>Nom : </ion-label>
            <ion-input placeholder="Nom" v-model="contactForm.nom"></ion-input>
            <ion-label>Prénom : </ion-label>
            <ion-input placeholder="Prénom" v-model="contactForm.prenom"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Photo : </ion-label>
            <ion-input type="file" accept="image/*" v-model="contactForm.photo"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Entreprise : </ion-label>
            <ion-input placeholder="Entreprise" v-model="contactForm.entreprise"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Numéro de téléphone : </ion-label>
            <ion-input placeholder="Numéro" type="number" v-model="contactForm.numero"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Adresse : </ion-label>
            <ion-input placeholder="Adresse" v-model="contactForm.adresse"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Email : </ion-label>
            <ion-input placeholder="Email" type="email" v-model="contactForm.email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label>Note : </ion-label>
            <ion-input placeholder="Note" v-model="contactForm.note"></ion-input>
          </ion-item>
          
          <ion-button expand="block" type="button" @click="createContact()">Ajouter</ion-button>
        </form>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Contact } from '@/domains/contact.interface';
import contactCommand from '@/commands/contact.commands';
import contactQuery from '@/query/contact.query';
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput } from '@ionic/vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput },

data() {
  return {
    contactForm: {
      id : '',
      nom: '',
      prenom: '', 
      photo: '', 
      entreprise: '', 
      numero: 0, 
      adresse: '',
      email: '', 
      note: ''
      } as Contact,
      contacts: [] as Array<Contact>
    }
},

methods: {
  createContact() {
    const contact: Contact = this.contactForm;
    contactCommand.createContact(contact);
    this.getContacts();
  },
  getContacts() {
      this.contacts=contactQuery.getContacts();
    }

}
  
});
</script>
