<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        name: String,
        value: Number,
        features: Array,
        link: String
    },
    setup() {
        
    },
})
</script>


<template>
    <section>
        <div class>
            <p class="text-xl font-bold">{{ name }}</p>
            <p class="border rounded-lg border-purple-700 p-2 mt-5 text-4xl font-thin">{{ value }} $</p>
            <ul class="border rounded-lg border-purple-700 p-2 mt-5">
                <div v-for="(feature,index) in features" :key="index">
                    {{ feature }}
                </div>
            </ul>
            <button class="mt-10 text-white bg-purple-700 hover:bg-purple-800font-bold rounded-lg text-lg px-5 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Subscribe
            </button>
        </div>
    </section>
</template>