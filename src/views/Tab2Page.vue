<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Liste des contacts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Liste des contacts</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-accordion-group>
          <ion-item v-for="(contact, index) in contacts" :key="index">
            <ion-accordion>

              <ion-item slot="header">
                <ion-avatar slot="start">
                  <img v-if="contact.photo!=''" src="../images/avatar.svg" />
                </ion-avatar>
                <ion-label>{{contact.prenom}} {{contact.nom}}</ion-label>
              </ion-item>

              <ion-list slot="content">
                <ion-item>
                  <ion-label>Numero : {{contact.numero}}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Adresse : {{contact.adresse}}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Email : {{contact.email}}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Entreprise : {{contact.entreprise}}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Note : {{contact.note}}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-button class="button" color="warning" @click="addFavoris(index)">Ajouter aux favoris</ion-button>
                  <ion-button class="button" color="medium">Editer</ion-button>
                  <ion-button class="button" color="danger" @click="deleteContact(index)">Supprimer</ion-button>
                </ion-item>
              </ion-list>

            </ion-accordion>
          </ion-item>
        </ion-accordion-group>

        <div v-if="contacts.length === 0">
        <p style="color: red;">Vous n'avez pas de contact pour le moment</p>
        </div>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { Contact } from '@/domains/contact.interface';
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import contactQuery from "@/query/contact.query";
import contactCommand from "@/commands/contact.commands";
export default defineComponent({
  name: 'Tab2Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
  return {
    contactForm: {
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
mounted() {
    this.getContacts();
  },

  methods: {
    getContacts() {
      this.contacts=contactQuery.getContacts();
    },

  deleteContact(index: number) {
    return contactCommand.deleteContact(index);
  },

  addFavoris(index: number) {
    const contact: Contact = this.contactForm;
    return contactCommand.favContact(index);
  }
  }
});
</script>
<style>
.button{
  margin: 3%;
}
</style>