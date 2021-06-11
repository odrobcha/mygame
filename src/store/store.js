
import Vuex from 'vuex'
import Vue from 'vue'


//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
    welcome: false,
    lang: 'en',
    totalScore: 0,



    posts: [],
    test: 'Hi! I am here!',
    user: "The best user",
    buttonText:"I am a button Text"
}

//to handle state
const getters = {
    notWelcome: state =>{
        return !state.welcome;
    }
}


//to handle mutations
const mutations = {

    changeText(state, text){
        state.buttonText = text
    },
    showWelcome(state){
        state.welcome = true;
    },
    changeLang(state, lang){
        state.lang = lang;

    },
    increaseScore(state){
        state.totalScore =  ++ state.totalScore;
        console.log("total" + state.totalScore );

    }
}

//to handle actions
const actions = {

    changeText({commit}){
        commit('changeText', "Button is clicked")
    },
    changeLang({commit},lang){
        commit('changeLang', lang);

    },
    showWelcome({commit}){
        commit('showWelcome');
    },
    increaseScore({commit}){
        commit('increaseScore');
    }
}


//export store module
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
