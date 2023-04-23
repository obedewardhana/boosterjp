import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {        
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#042F4D",
                secondary: "#1B4562",
                bluesea: "#036280",
                bluelighter:"#82BECF",
                accent: "#458CA4",
                dark: "#262626",
                dark2:"#474747",
                white: "#ffffff",
                black:"#000000",
                gray:"#dedede",
                socialfacebook:"#3b5998",
                socialinstagram:"#833AB4",
                socialgmail:"#c71610",
                socialtwitter:"#00acee",
                socialpinterest:"#E60023",
                graylight: "#262626",
                greylighter: "#a1a1a1",
                orange: "#ff9100",
                lightblue: "#c6cdde",
                lightgrey: "#EFEFEF",
                green: "#2CAD3E",
                red: "#eb1c24"
            }
        }
    }
});
