<script setup lang="ts">
import {onMounted} from "vue";
import {useMainStore} from "./model/pinia.ts";
import MainPage from "./pages/main/view.vue";
import AuthorizePage from "./pages/auth/view.vue";

const mainStore = useMainStore();
onMounted(() =>{
    mainStore.checkToken();
    setInterval(() => {
        mainStore.checkToken();
    }, 1000 * 60 * 5)
})
</script>

<template>
    <AuthorizePage v-if="!mainStore.isTokenValid"/>
    <MainPage v-else/>
</template>

<style scoped>

</style>
