<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <h3 class="font-weight-light mt-5">
                <v-icon class="mr-2">
                  mdi-whatsapp
                </v-icon>
                Cel.: +55 (11) 99939-5169
              </h3>
              <h3 class="font-weight-light">
                <v-icon class="mr-2">
                  mdi-whatsapp
                </v-icon>
                Cel.: +55 (15) 99729-9592
              </h3>
              <h3 class="font-weight-light">
                aadevaldoncoutinho@gmail.com
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <!-- <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nome"
                    required
                ></v-text-field> -->

                <!-- <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field> -->

                <!-- <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Mensagem"
                    required
                /> -->
                <h3 class="font-weight-light mt-4 mb-16">
                  Encontre o serviço ideal para o tratamento da sua piscina.
                  <v-btn
                    
                    color="secondary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                    href="https://api.whatsapp.com/send?phone=5511999395169&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20limpeza%2Fprodutos%20para%20piscinas." target="_blank"
                >
                  Nos envie seu contato!
                </v-btn>
                </h3>
                
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/borderWavesBlue.svg"/>
    </div>
    <v-snackbar
        v-model="snackbar.enabled"
        timeout="3000"
        right
        top
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
}

.font-weight-light.mt-4.mb-16 {
  text-align: center;
}

.col-12 {
  max-width: 100%;
  text-align: center;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script>
// import {db} from '@/main'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "O campo nome é obrigatório",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O campo email é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "O campo de texto é obrigatório",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    submit() {
      db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })
    }
  }
};
</script>
