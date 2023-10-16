<script setup lang="ts" >
import MyButton from "../../views/products-button/view.vue";
import MyTable from "../../views/products-table/view.vue";
import MyInput from "../../views/products-input/view.vue";
import MyRow from "../../views/products-row/view.vue";
import MySelect from "../../views/select/view.vue";
import {Entities, IOption} from "../../shared/interface.ts";
import { ref } from 'vue'
import {useMainStore} from "../../model/pinia.ts";


type OptionsValues  =  'notSelected' | Entities;
const isLoading = ref(false)
const mainStore = useMainStore()
const name = ref("")
const sentData = async () => {
    isLoading.value = true;
    await mainStore.fetchData(selectedOption.value as Entities, name.value).then(() => {
        isLoading.value = false;
    });
    name.value = "";
}


const tableColumns = [
    {
        label: "ID",
        key: "id",
    },
    {
        label: "Name",
        key: "name",
    },
    {
        label: "Entity",
        key: "entity",
    },
]

const options:IOption[] = [
    {
        value: "notSelected",
        label: "Не выбрано",
    },
    {
        value: "contacts",
        label: "Контакты",
    },
    {
        value: "companies",
        label: "Компании",
    },
    {
        value: "leads",
        label: "Клиенты",
    }
]
const selectedOption = ref<OptionsValues>('notSelected')

</script>

<template >
  <div class="container">
    <v-expand-transition>
      <MyRow gap="24" flexDirection="column">
          <MyRow gap="24" flexDirection="row" alignItems="align-baseline" justifyContent="justify-center">
              <MySelect v-model="selectedOption" :options="options"/>
              <MyInput v-model="name" placeholder="enter name" :disabled="false" label="Name" />
              <MyButton :disabled="selectedOption === 'notSelected'"  text="Send" :loading="isLoading" @click="sentData" />
          </MyRow>
          <MyTable :data="mainStore.data" :columns="tableColumns"/>
      </MyRow>
    </v-expand-transition>
  </div>
</template>

<style scoped>

</style>