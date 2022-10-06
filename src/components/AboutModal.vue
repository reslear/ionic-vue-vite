<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="end">
        <ion-button @click="$emit('onClose')">CLOSE MODAL</ion-button>
      </ion-buttons>
      <ion-title>{{title}}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>modal contend</p>
  </ion-content>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  IonContent,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'

defineEmits(['onClose'])

const title = ref('About Modal')
</script>
