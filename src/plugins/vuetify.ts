import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FFD630', // #E53935
                secondary: 'colors.red.lighten4', // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    },
})
