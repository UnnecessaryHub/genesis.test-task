<script setup lang="ts" >
import MyButton from "../../components/ui/MyButton/MyButton.vue";
import MyTable from "../../components/ui/MyTable/MyTable.vue";
import MyInput from "../../components/ui/MyInput/MyInput.vue";
import MyRow from "../../components/ui/Row/MyRow.vue";
import MySelect from "../../components/ui/MySelect/MySelect.vue";
import {Entities, IOption} from "../../helpers/interface.ts";
import { ref } from 'vue'
import {useMainStore} from "../../store/main.ts";


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
      <MyRow gap="24" flexDirection="column">
          <MyRow gap="24" flexDirection="row" alignItems="align-baseline" justifyContent="justify-center">
              <MySelect v-model="selectedOption" :options="options"/>
              <MyInput v-model="name" placeholder="enter name" :disabled="false" label="Name" />
              <MyButton :disabled="selectedOption === 'notSelected'"  text="Отправить" :loading="isLoading" @click="sentData" />
          </MyRow>
          <MyTable :data="mainStore.data" :columns="tableColumns"/>
      </MyRow>
  </div>
</template>

<style scoped>

</style>