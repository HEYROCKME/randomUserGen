const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      company: 'blue',
      picture: 'https://randomuser.me/api/portraits/men/11.jpg',
    }
  },
})

app.mount('#app')
