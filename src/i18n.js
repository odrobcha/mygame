import Vue from 'vue';
import VueI18n from 'vue-i18n';


Vue.use(VueI18n);

const messages = {
    'en': {
        headerTitle: "Top menu!!!!!!!!!!",
        sideMenu: "Side Menu",
        mainContent: "Main Content",
        menuColors: "COLORS",
        menuShapes: "SHAPES",
        headerColors: "Let learn colors",
        colorGame1_Title: "Find the same color",
        colorGame1Rules: "Look to the sample, hear the sound and find correct color. Get 10 right answers and get +1 Gold Star"
    },
    'uk': {
        headerTitle: "Головне меню",
        sideMenu: "Бокове меню",
        mainContent: "Головний контент",
        menuColors: "КОЛЬОРИ",
        menuShapes: "ФОРМИ",
        headerColors: "Вчимо кольори",
        colorGame1_Title: "Знайди однаковий колір",
        colorGame1Rules: "Глянь на зразок, послухай звук та вибери правильний колір. При 10 правильних відповідях отримаеш +1 золоту зірку"

    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;

