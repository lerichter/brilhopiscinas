<template>
  <section id="hero">
    <v-parallax dark src="" height="650">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4"></h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mt-5"
              >
                Saiba mais
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
              <br>
              <v-btn 
                rounded 
                block
                href="https://api.whatsapp.com/send?phone=5511999395169" 
                target="_blank" 
                large 
                color="secondary"
                :dark="valid"
                class="mt-4">
                <v-icon class="mr-2">
                  mdi-whatsapp
                </v-icon>
                ENTRE EM CONTATO
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <!-- <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">Title</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </v-col> -->
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          img: require("@/assets/img/certificado.svg"),
          title: "Limpadores Certificados",
          text: "Todos os nossos profissionais são treinados e possuem certificados emitidos por empresas como GENCO, HTH e ANAPP.",
        },
        {
          img: require("@/assets/img/satisfacao.svg"),
          title: "Satisfação 100% garantida",
          text: "Muitos de nossos clientes contam com nossos serviços há mais de 35 anos.",
        },
        {
          img: require("@/assets/img/calendario-semanal.svg"),
          title: "Disponível de 2ª a 6ª",
          text: "Atendemos a Grande São Paulo (com foco na Zona Sul e Oeste) e Interiores como Iperó e Boituva. ",
        },
      ],
    };
  },
};
</script>


<style>

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

.col-md-6.col-xl-8.col-12 {
    padding: 40px;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
