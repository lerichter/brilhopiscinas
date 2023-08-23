<template>
  <section id="services">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="@/assets/img/swimming-pool(1).svg" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="8" sm="8" class="white--text text-left">
              <h1 class="font-weight-light">
                • Purificação da Água<br>
                • Limpeza das Bordas<br>
                • Aspiração da Piscinas e Eliminação de Algas<br>
                • Controle de Alcalinidade e Ph<br>
                • Controle de Cloro e Dureza Cálcica<br>
                • Substituição da Carga Filtrante (Troca de Areia)<br>
                • Conserto de Motores<br>
                • Correção de Água Turva<br>
                • Instalação de Filtros<br>
                • Instalação de Bombas<br>
                • Troca de Vinil
              </h1>
              
              <v-btn rounded outlined href="https://api.whatsapp.com/send?phone=5511999395169" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-whatsapp
                </v-icon>
                ENTRE EM CONTATO
              </v-btn>
            </v-col>
            <div class="svg-border-waves text-white">
              <v-img src="@/assets/img/borderWaves.svg" />
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#services {
  background-color: #ec8029;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 550px;
}

.row.align-center.justify-center {
    font-size: 0.7rem;
}

#services .container,
#services .row {
  height: 100%;
}
</style>