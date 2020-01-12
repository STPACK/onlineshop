<template>
    <div >
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
    </div>
</template>

<script>
export default {
    
    
}
</script>

