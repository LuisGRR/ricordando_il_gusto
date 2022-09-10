import { createApp } from "vue";
import "./index.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHatWizard,
  faEnvelope,
  faSquare,
  faX,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faCalendarDays,
  faDollarSign,
  faLocationDot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHatWizard,
  faFacebook,
  faTwitter,
  faInstagram,
  faEnvelope,
  faSquare,
  faX,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faCalendarDays,
  faDollarSign,
  faLocationDot,
  faBars
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
