<template>
    <div 
        v-on:click="emit('filterOptions')"
        class="flex items-center cursor-pointer"
    >
        <div class="flex rounded-full bg-yellow-100 p-2 m-1 ">
            <div v-for="i in star" v-bind:key="i">
                <img class="w-6 h-6" src="@/assets/star-pokemon.png" alt="">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    defineProps({
        star: {
            type: Number,
            required: true
        }
    })

    const emit = defineEmits(['filterOptions']);
</script>