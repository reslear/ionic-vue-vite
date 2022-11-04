<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vite - Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Home</h1>

      <div class="ion-padding container">
        <ion-button
          @click="mainStore.decrement()"
          shape="round"
          fill="outline"
          class="ion-no-padding"
          size="small"
          ><ion-icon slot="icon-only" :icon="removeOutline"></ion-icon
        ></ion-button>
        <ion-chip>{{ mainStore.title }}</ion-chip>
        <ion-button
          @click="mainStore.increment()"
          shape="round"
          fill="outline"
          class="ion-no-padding"
          size="small"
          ><ion-icon slot="icon-only" :icon="addOutline"></ion-icon
        ></ion-button>
      </div>
      <ion-button router-link="/about">About</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonContent,
  IonButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonChip,
  IonIcon,
} from '@ionic/vue'
import { useMainStore } from '../stores/main.store'

import { removeOutline, addOutline } from 'ionicons/icons'

const mainStore = useMainStore()
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
