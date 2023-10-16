<script setup lang="ts">
import {useMainStore} from "../../model/pinia.ts";
import { ref } from 'vue'
import MyRow from "../../views/products-row/view.vue";
import MyInput from "../../views/products-input/view.vue";
import MyButton from "../../views/products-button/view.vue";

const mainStore = useMainStore()
const isLoading = ref(false)
const clientId = ref("")
const authorize = async () => {
    isLoading.value = true
    await mainStore.authorize(clientId.value).then(() => {
        isLoading.value = false
    })
}

</script>

<template>
    <div class="authorize-page">
      <div class="container">
        <v-fade-transition>
          <MyRow gap="16" flexDirection="row"  v-show="true" v-if="!mainStore.isTokenValid" alignItems="align-baseline" justifyContent="justify-center">
              <MyInput v-model="clientId" placeholder="enter clientId" :disabled="false" label="ID клиента"/>
              <MyButton :disabled="false"  text="Send" :loading="isLoading" @click="authorize" />
          </MyRow>
        </v-fade-transition>
      </div>
    </div>
</template>


<style scoped>
.authorize-page{
    min-height: 100vh;
  display: grid;
    width: 100vw;
   align-items: center;
}
</style>