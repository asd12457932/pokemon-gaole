<template>
    <div 
        v-on:click="emit('filterOptions')"
        class="flex items-center cursor-pointer"
    >
        <div 
            class="flex rounded-full p-2 m-1" 
            v-bind:class="isActive ? 'bg-yellow-100' : 'bg-white border border-yellow-200 hover:bg-yellow-100'"
        >
            <div v-for="i in star" v-bind:key="i">
                <img class="w-6" src="@/assets/star-pokemon.png" alt="">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
    defineProps({
        star: {
            type: Number,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['filterOptions']);
</script>