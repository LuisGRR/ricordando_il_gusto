import vue from "vue";
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
  faLocationDot
);

vue.defineComponent("font-awesome-icon", FontAwesomeIcon);
// app.component("font-awesome-icon", FontAwesomeIcon);
