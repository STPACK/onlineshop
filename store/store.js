import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state:{
        productList:[
            
            {
                productName:'king of beaf2'  ,
                category:'beaf',
                genus:'newZealand',
                detailPD:'lorem10sdfasdfa asdf a asdfasdf asdf asdf asdf asdf asdfasdf asdf sefsef',
                detailPK:'asdf asdfawe asd adsf asd1654sdf asd5f4 a6s5df4a96se4f65 a6s5d4f 6a4s6d5f4 6asd5f4 6a54sdf',
                price:3400,
                id:'asdf2',
                volume:'20',
                imageUrl:'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
                productName:'king of beaf1'  ,
                category:'beaf',
                genus:'newZealand',
                detailPD:'lorem10sdfasdfa asdf a asdfasdf asdf asdf asdf asdf asdfasdf asdf sefsef',
                detailPK:'asdf asdfawe asd adsf asd1654sdf asd5f4 a6s5df4a96se4f65 a6s5d4f 6a4s6d5f4 6asd5f4 6a54sdf',
                price:3900,
                id:'asdf1',
                volume:'20',
                imageUrl:'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
                productName:'king of beaf4'  ,
                category:'beaf',
                genus:'newZealand',
                detailPD:'lorem10sdfasdfa asdf a asdfasdf asdf asdf asdf asdf asdfasdf asdf sefsef',
                detailPK:'asdf asdfawe asd adsf asd1654sdf asd5f4 a6s5df4a96se4f65 a6s5d4f 6a4s6d5f4 6asd5f4 6a54sdf',
                price:1000,
                id:'asdf4',
                volume:'20',
                imageUrl:'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            {
                productName:'king of beaf5'  ,
                category:'beaf',
                genus:'newZealand',
                detailPD:'lorem10sdfasdfa asdf a asdfasdf asdf asdf asdf asdf asdfasdf asdf sefsef',
                detailPK:'asdf asdfawe asd adsf asd1654sdf asd5f4 a6s5df4a96se4f65 a6s5d4f 6a4s6d5f4 6asd5f4 6a54sdf',
                price:3200,
                id:'asdf5',
                volume:'20',
                imageUrl:'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            },
            
            

        ],
    
    },
    mutations:{

    },

    actions:{

    },

    getters:{
        pdList(state){
            return state.productList
        }

    },
})