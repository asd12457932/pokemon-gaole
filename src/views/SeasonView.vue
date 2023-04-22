<template>
    <div class="flex p-3">
        <OptionFilter 
            v-for="i in [3,4,5]" 
            v-bind:key="i" 
            v-bind:star="i"
            v-on:filterOptions="filterOptions(i)"
        />
    </div>
    <div class="flex flex-wrap">
        <PokemonOption 
            v-for="option in pokemonOptions" 
            v-bind:key="option" 
            v-bind:isActive="selection.includes(option)"
            v-bind:pokemon="option"
            v-on:handleClick="handlePokemonOptionClick(option)"
        />
    </div>
    <div class="flex w-full overflow-x-auto whitespace-nowrap my-3 text-sm">
        <div 
            v-for="item in pokemon" 
            v-bind:key="item[0]" 
            class="flex flex-col items-center"
        >
            <div class="flex p-2">
                <div class="mr-3">{{ item[0] }}</div>
                <div class="rounded-full bg-yellow-100 px-2">{{ getSelectionCount(item[0]) }}</div>
            </div>
            <div class="flex flex-col">
                <div class="p-2 border border-gray-100 flex flex-wrap items-center justify-center" 
                v-bind:class="{ 'bg-yellow-100': selection.includes(option) }"
                v-for="(option, index) in item[1]"
                v-bind:key="`${option}-${index}`"
                >
                    {{ option }}
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import PokemonOption from '../components/PokemonOption.vue';
import OptionFilter from '../components/OptionFilter.vue';

const pokemon: Ref<Map<string, object>> = ref(new Map());
const allPokemon = ref<string[]>([]);
const pokemonOptions = ref<string[]>();
fetch('../src/assets/rush1.json')
    .then(res => res.json())
    .then(data => {
        Object.entries(data).forEach(([key, value]) => {
            pokemon.value.set(key, value as object);
            allPokemon.value.push(...Object.values(value as object));
            pokemonOptions.value = [...new Set(allPokemon.value.filter((x: string) => x.includes(`3★`)))].sort()
        })

    });

const filterOptions = (stars: number) => {
    pokemonOptions.value = [...new Set(allPokemon.value.filter((x: string) => x.includes(`${stars}★`)))].sort();
}

const selection = ref<string[]>([]);

const handlePokemonOptionClick = (pokemon: string) => {
    console.log('clicked', pokemon)
    if (selection.value.includes(pokemon)) {
        removeSelection(pokemon);
    } else {
        addSelection(pokemon);
    }
}

const addSelection = (pokemon: string) => {
    selection.value = [...selection.value, pokemon];
}

const removeSelection = (pokemon: string) => {
    selection.value = selection.value.filter(x => x !== pokemon);
}

const getSelectionCount = (row: string) => {
    return Object.entries(pokemon.value.get(row) ?? {}).filter(([_, value]) => selection.value.includes(value as string)).length;
}
</script>