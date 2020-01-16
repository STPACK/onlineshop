<template>
    <div>
        <v-container fluid>
            
                <v-btn to="/admin" color="amber">
                    ADMIN
                </v-btn>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation       
                >
                    <v-text-field
                    v-model="username"
                    :rules="[rules.required]"
                    label="UserName"
                    required
                    ></v-text-field>
                
                    <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    label="Password"
                    @click:append="show1 = !show1"
                    ></v-text-field>
                
                    <v-btn :disabled="!valid" color="success" class="mr-4"
                    @click="submit">login</v-btn>
                    <v-btn color="error" class="mr-4" @click="reset">clear</v-btn>
                </v-form>

            
        </v-container>
    </div>
       
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            valid: true,
            show1: false,
            rules: {
                required: value => !!value || 'Required.',
            }          
        }
    },
    
    methods: {
        submit () {
            if (this.$refs.form.validate()) {
                console.log("login");
            }
        },
        reset () {
        this.$refs.form.reset()
        },
   
  },
   

}

</script>