<template>
    <div 
        class="cursor-pointer p-2 text-sm md:text-base text-center md:basis-1/4 lg:basis-1/12 basis-1/3 sm:basis-1/3"
        v-on:click="emit('handleClick')" 
        v-bind:class="{ 'bg-yellow-100': isActive}"
    >
        {{ pokemon }}
    </div>
</template>
<script lang="ts" setup>
    defineProps({
        pokemon: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['handleClick']);
</script>