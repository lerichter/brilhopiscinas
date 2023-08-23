<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Técnico Habilitado em Tratamento de Água pelo curso da CETESB Certificado Nº 0205/06
        e Curso de Segurança em Piscinas pela ANAPP.<br>
        CNPJ 19.874.126/0001-13
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Criado com  ♥ por <a class="white--text" href="https://www.linkedin.com/in/lerichter/">Ellen Richter</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "https://www.facebook.com/brilhopiscinas1/",
      },
      {
        text: "mdi-whatsapp",
        link: "https://api.whatsapp.com/send?phone=5511999395160",
      },
      
      {
        text: "mdi-instagram",
        link: "https://instagram.com/brilhopiscinas/",
      },
    ],
  }),
};
</script>
