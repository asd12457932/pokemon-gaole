<template>
  <div class="bg-dot flex flex-col items-center container mx-auto p-5">
    <header>
      <img class="max-w-[300px]" src="@/assets/logo.9ac99ee.png" />
      <div class="mt-6 text-sm flex flex-wrap items-center">
          <NavbarLink 
            v-for="item in radioGroups" 
            v-bind:to="item.to" 
            v-bind:text="item.text" 
            v-bind:key="item.text" 
            v-bind:is-active="item.to === $route.path"
          />
      </div>
    </header>

  <RouterView />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarLink from './components/NavbarLink.vue';

const radioGroups = [
  {
    text: '傳說 Rush 1 彈',
    to: '/rush1'
  },
  {
    text: '傳說 1 彈',
    to: '/1'
  }
]
</script>