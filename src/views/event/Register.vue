<script setup>
import { ref, onMounted, computed } from 'vue'
import EventService from '@/services/EventService.js'

const props = defineProps(['id'])

const event = ref(null)
const id = computed(() => props.id);
onMounted(() => {
  EventService
    .getEvent(props.id.value)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }">Details</router-link>
    </div>
    <div id="nav">
      <router-link :to="{ name: 'EventRegister', params: { id } }">Register</router-link>
    </div>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }">Edit</router-link>
    </div>
    <p>Register for event here</p>
  </div>
</template>