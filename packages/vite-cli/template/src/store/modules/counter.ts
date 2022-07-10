export const useCounterStore = defineStore('useCounterStore', () => {
  const count = ref<number>(1)
  function increment() {
    count.value++
  }

  function doubleCount() {
    return count.value * 2
  }

  return { count, increment, doubleCount }
})
