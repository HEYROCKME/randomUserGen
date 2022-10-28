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
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.company = results[0].gender
      this.picture = results[0].picture.large
    },
  },
})

app.mount('#app')
