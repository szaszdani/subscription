<script setup lang="ts">
    const { data: stripeData } = await useFetch('/api/stripe');
</script>

<template>
    <section class=" flex bg-white justify-center items-center pt-10">
        <div class="flex flex-col">
            <p class="text-center text-5xl font-bold pb-2">Subscribe to our services!</p>
            <p class="text-center text-3xl font-thin pb-10">Choose your plan and be a subscribed person!</p>
            <div v-if="stripeData?.ok" class="container mx-auto p-6 grid grid-cols-3 gap-4 text-center justify-bottom">
                <div v-for="(prices,index) in stripeData?.data" :key="index" class="col-span-1 flex flex-col bg-white border rounded-lg border-purple-700 p-4">
                    <div>
                        <Card :name="prices.name" :value="prices.value" :features="['#1 Feature']"></Card>
                    </div>
                </div>
            </div>
            <div v-else>
                <p class="text-center text-red-500 text-5xl">{{ stripeData?.data[0] }}</p>
            </div>
        </div>
    </section>
</template>