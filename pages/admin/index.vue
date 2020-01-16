<template>
    
    <div>

        <v-container fluid>
              <v-btn to="/portal/product"  color="light-green">
                    new poductList
                </v-btn>
                 <v-divider class="mx-2 my-4"></v-divider>
                 <h2>Edit Post</h2>
                 <v-layout>
                  
                <productList
                isAdmin
                :products="loadedPosts"
                />
               
              
                     
                 </v-layout>
                

        </v-container>
    </div>
</template>
<script>
import productList from '@/components/category/productList'
import { store } from '@/store/store'
export default {
    store,
    components:{
        productList
    },
    computed: {
        loadedPosts() {
        return this.$store.getters.pdList
        }
    }
        
  
}
</script>