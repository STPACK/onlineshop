<template>
  <div>
    
    <h2 class="mt-8">Hot Deal</h2>

    <v-card>
      <v-tabs
        background-color="#f5f5f5"
        show-arrows
        height="250"
        center-active
        
      >
        <v-tabs-slider color="#f5f5f5"/>
        <v-tab
          v-for="i in 10"
          :key="i"
          
          class="pa-1"
        >
          <v-card
            width="200px"  
            height="280px"
            color="#f5f5f5"
            flat 
            :href="'/hotdeal/'+i" 
          >
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              width="200px"
              height="200px"
             />
            <v-card-title>
              Item {{ i }}
            </v-card-title>
          </v-card>          
        </v-tab>
      </v-tabs>
    </v-card>

    <br><br>

    <v-container fluid grid-list-md class="pa-0">
      <v-layout row wrap>
        <v-flex d-flex   md2   >
          <v-card
            color="#f5f5f5"
            
            width="100%"
          >
            <v-card-title>
              <v-icon
                large
                left
              >
                mdi-currency-eth
              </v-icon>
              <span class="title font-weight-light">Category</span>
            </v-card-title> 
          <v-divider></v-divider>

          </v-card>
          
        </v-flex >

        <v-flex d-flex xs12  md10>
          <v-layout row wrap>
              <v-flex
                d-flex
                md12
              >
                <v-card
                  color="#f5f5f5"
                  
                  width="100%"
                
                 
                >
                  <v-card-title>All</v-card-title>
                </v-card>
              </v-flex>

              <v-flex
                d-flex
                md12
              >
                <v-layout row wrap>
                  <v-flex v-for="i in 12" :key="i" md3>
                    <v-card hover >
                      <v-card :href="'/product/'+(i * 3 * 5 + 10)">
                        <v-img
                        :src="`https://picsum.photos/500/300?image=${i * 3 * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${i * 3 * 5 + 10}`"
                        aspect-ratio="1"
                        />

                      </v-card>
                      <v-card-title>
                        Top western road trips
                      </v-card-title>

                      <v-card-subtitle>
                        1,000 miles of wonder
                        <v-icon
                          
                          right
                        >
                          mdi-shopping-outline
                        </v-icon>
                      </v-card-subtitle>

                        
                  
                    
                    
                    </v-card>        
                    
                  </v-flex>
          </v-layout>

              </v-flex>

        </v-layout>
      </v-flex>

    </v-layout >
        </v-container>





  </div>
</template>

<script>
import BreadCrumbs from '@/components/menufile/breadCrumbs'
export default {
    components:{
        BreadCrumbs
    },
    data: () => ({
      breadC: [
        {
          text: 'Category',
          disabled: false,
          href: '/category/all',
        },
        {
          text: 'all',
          disabled: true,
          href: '/category/all',
        },
      ],
    }),

    
}
</script>

<style scoped>

.gg{
  margin: 0;
  padding: 0;

}

</style>