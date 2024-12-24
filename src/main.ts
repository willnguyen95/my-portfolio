import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret, faHome, faPhone, faContactBook, faProjectDiagram, faRobot } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas, faUserSecret, faHome, faPhone, faContactBook, faProjectDiagram, faRobot)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount("#app");
