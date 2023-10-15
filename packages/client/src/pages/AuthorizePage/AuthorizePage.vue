<script setup lang="ts">
import {useMainStore} from "../../store/main.ts";
import { ref } from 'vue'
import MyRow from "../../components/ui/Row/MyRow.vue";
import MyInput from "../../components/ui/MyInput/MyInput.vue";
import MyButton from "../../components/ui/MyButton/MyButton.vue";

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
          <MyRow gap="16" flexDirection="row" v-if="!mainStore.isTokenValid" alignItems="align-baseline" justifyContent="justify-center">
              <MyInput v-model="clientId" placeholder="enter clientId" :disabled="false" label="ID клиента"/>
              <MyButton :disabled="false"  text="Отправить" :loading="isLoading" @click="authorize" />
          </MyRow>
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