// Inizializzazione Vue Js:
const app = Vue.createApp({
  data() {
    return {
      emails: [],
    };
  },
  mounted() {
    this.generateEmails();
  },
  methods: {
    generateEmails() {
      for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then(response => {
            this.emails.push(response.data.response);

            console.log("Email generata:", response.data.response);

            if (this.emails.length === 10) {

              console.log("Tutte le email sono state generate:", this.emails);

            }
          })
          .catch(error => {

            console.error("Errore nella richiesta:", error);
            
          });
      }
    },
  },
});

  // Mostra l'applicazione nella pagina HTML
  app.mount('#app');
