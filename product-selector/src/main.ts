import "@/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";

import App from "./App.vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#5394a7",
          secondary: "#fabc43",
          action: "#f70548",
          lightgreen: "#DDF2E8",
          text: "#313131",
        },
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
