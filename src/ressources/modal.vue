<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
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
          
          <ion-button expand="block" type="button" @click="editContact(index)">Modifier</ion-button>
        </form>
      </div>
  </ion-content>
</template>

<script lang="ts">
import { Contact } from '@/domains/contact.interface';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
import contactCommand from '@/commands/contact.commands'
import contactQuery from '@/query/contact.query'
export default defineComponent({
  name: 'Modal-vue',
  props: {
    title: { type: String, default: 'Super Modal' },
    index: { type: Number},
    
  },
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
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonInput },
  methods: {
    editContact(index: number) {
    const contacts = contactQuery.getContacts();
    const contact: Contact = this.contactForm;
    contact.id=contacts[index].id;
    contactCommand.editContact(index, contact);
    this.getContacts();
    },
    getContacts() {
      this.contacts=contactQuery.getContacts();
    }
  }
});
</script>