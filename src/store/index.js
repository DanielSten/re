import Vuex from 'vuex'
import Axios from "axios";



export default new Vuex.Store({
    state: {
        settings: {},
        sections: [],
    },
    mutations: {
        setSections(state, sections) {
            state.sections = sections
        },
        setSettings(state, settings) {
            state.settings = settings
        }
    },
    getters: {
        getSections(state) {
            return state.sections
        },
        getSettings({ settings }) {
            return settings
        }
    },
    actions: {
        loadData( context ) {
            Axios.get('/all-info')
                .then(response => {
                    if(response.data){
                        context.commit('setSections', response.data.sections)
                        context.commit('setSettings', response.data.settings)
                    }
                })
                .catch(e => console.error(e));
        },
        getCategoryById ( context, id ) {
            for (let value of context.getters.getSections) {
                if ( value.id == id) {
                    return value
                }
            }
            return {}
        },
        getProductById ( context, id ) {
            for (let section of context.getters.getSections) {
                for (let value of section.goods) {
                    if (value.id == id) {
                        return value
                    }
                }
            }
            return {}
        }
    },
})