<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-1 mb-3">
                Comprometidos em manter a água da sua piscina em excelentes condições. 
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    A BRILHO PISCINAS foi criada há mais de 35 anos pelo Técnico certificado 
                    com curso e Tratamento de Água junto à CETESB, Adevaldo Coutinho. 
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <p class="text-justify">
                    Realizamos tratamentos mensais com visitas semanais, inclusos ou não material e produtos necessários. 
                    Entre em contato e agende uma visita para saber qual o plano se adequa melhor ao seu perfil.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/swimming-pool.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
