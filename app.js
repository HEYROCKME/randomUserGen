const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@blue.com',
      company: 'blue',
      picture: 'https://randomuser.me/api/portraits/men/11.jpg',
    }
  },
  methods: {
    getUser() {
      ;(this.firstName = 'Jane'),
        (this.lastName = 'Doe'),
        (this.email = 'janedoe@purple.com'),
        (this.company = 'purple'),
        (this.picture = 'https://randomuser.me/api/portraits/women/11.jpg')
    },
  },
})

app.mount('#app')
