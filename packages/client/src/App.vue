<script setup lang="ts">
import {onMounted} from "vue";
import {useMainStore} from "./store/main.ts";
import MainPage from "./pages/MainPage/MainPage.vue";
import AuthorizePage from "./pages/AuthorizePage/AuthorizePage.vue";

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
