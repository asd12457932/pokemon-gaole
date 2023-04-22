<template>
    <RouterLink v-bind:to="to">
        <div v-bind:class="isActive ? 'bg-yellow-100' : 'bg-white border border-yellow-200 hover:bg-yellow-100'"
            class="p-3 mr-3  rounded-full">{{ text }}</div>
    </RouterLink>
</template>
<script lang="ts" setup>
defineProps({
    to: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        required: true
    }
})
</script>