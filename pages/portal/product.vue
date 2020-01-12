<template>
    
    <div>
       <v-container fluid  >

            <h2>เพิ่มสินค้าใหม่</h2>
            
            <v-divider class="mx-2 my-4"></v-divider>
            
            <v-flex>
                <h4>ข้อมูลทั่วไป</h4>
                <v-text-field
                    v-model="productName"
                    :rules="[rules.required]"
                    counter
                    maxlength="120"
                    hint="ตั้งชื่อให้สอดคล้องกับประเภทของสินค้า"
                    label="ชื่อสินค้า"
                    required
                ></v-text-field>
            
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-combobox
                            v-model="category"
                            :items="foodCategory"
                            chips
                            label="ชนิดของสินค้า"
                            v-on:change="test(category)"
                            required
                            :rules="[rules.required]"
                        ></v-combobox>

                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-combobox
                            v-model="genus"
                            :items="foodGenus"
                            chips
                            label="ชนิดของสินค้า"
                            required
                            :rules="[rules.required]"
                            
                        ></v-combobox>
                    </v-col>
                </v-row>

                <v-textarea
                    v-model="detail"
                    required
                    :rules="[rules.required]"
                    label="รายละเอียดสินค้า"
                    counter
                    maxlength="5000"
                    auto-grow
                ></v-textarea>

            </v-flex>
             <v-divider class="mx-2 my-4"></v-divider>
             <v-flex>
                <h4>ข้อมูลการขาย</h4>
                <v-text-field
                    v-model="price"
                    :rules="[rules.required]"
                   type="number"
                    label="ราคา"
                    required
                ></v-text-field>
                
                
             </v-flex>
          
           
          
       </v-container>

        
    </div>
</template>

<script>
export default {
    data () {
      return {
          
        productName:""  ,
        category:'',
        genus:'',
        detail:'',
        price:'',
        rules: {
            required: value => !!value || 'Required.',
        } ,
        foodCategory: [
            'seafood',
            'beaf'
        ],
        foodGenus:[
            ''
        ],

      }
    },
    methods:{

        test(item){
            this.genus = '';
            if (item === 'seafood'){
                this.foodGenus=['salmon','lobster','uni']
            }else{
                this.foodGenus=['australia','newZealand','unitedStates','japan']
            }
        }
    }
}
</script>