import { defineStore } from 'pinia'
import { computed, ref, readonly } from 'vue'

export const useMainStore = defineStore('main', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }
  function decrement() {
    count.value--
  }

  const title = computed(() => `${count.value * 2}`)

  return {
    count: readonly(count),
    title,
    increment,
    decrement,
  }
})
