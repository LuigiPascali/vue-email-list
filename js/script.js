// // Inizializzazione Vue Js:
// const app = Vue.createApp({
//   data() {
//     return {
//       emails: [],
//     };
//   },
//   mounted() {
//     this.generateEmails();
//   },
//   methods: {
//     generateEmails() {
//       for (let i = 0; i < 10; i++) {
//         axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
//           .then(response => {
//             this.emails.push(response.data.response);

//             console.log("Email generata:", response.data.response);

//             if (this.emails.length === 10) {

//               console.log("Tutte le email sono state generate:", this.emails);

//             }
//           })
//           .catch(error => {

//             console.error("Errore nella richiesta:", error);

//           });
//       }
//     },
//   },
// });

// // Mostra l'applicazione nella pagina HTML
// app.mount('#app');


// BONUS: 

// Inizializzazione Vue Js:
const app = Vue.createApp({
  data() {
    return {
      emails: [],
      allEmailsGenerated: false,
      generatingEmails: false,
    };
  },
  methods: {
    generateEmails() {
      this.generatingEmails = true;
      const requests = [];

      for (let i = 0; i < 10; i++) {
        requests.push(
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        );
      }

      axios.all(requests)
        .then(responses => {
          this.emails = responses.map(response => response.data.response);
          this.allEmailsGenerated = true;
          this.generatingEmails = false;
          console.log("Tutte le email sono state generate:", this.emails);
        })
        .catch(error => {
          console.error("Errore nella richiesta:", error);
          this.generatingEmails = false;
        });
    },
  },
});


// Mostra l'applicazione nella pagina HTML
app.mount('#app');
