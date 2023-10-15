<script setup lang="ts">
import {IOption} from "../../../helpers/interface.ts";
import {ref} from "vue";
import {entityLocales} from "../../../helpers/script.ts";


interface IProps{
    options:IOption[];
    disabled?:boolean;
    modelValue:String;
}
const {options,modelValue,disabled} = withDefaults(defineProps<IProps>(),{
    disabled:false
});
const emit = defineEmits(['update:modelValue']);
const isOpen = ref(false);
const selectedOption = ref<String>(options[0].value);

const toggleSelect = () => {
    isOpen.value = !isOpen.value;
}
const selectOption = (option:IOption) => {
    selectedOption.value = option.value;
    toggleSelect()
    emit('update:modelValue', option.value);
}

</script>

<template>

  <div class="my-select-wrapper">
      <div class="my-select"  @blur="isOpen = false" >
          <div class="selected" :class="{ open: isOpen }" @click="toggleSelect">
              {{ entityLocales[selectedOption] }}
          </div>
          <div class="items" :class="{ selectHide: !isOpen }" >
              <div
                      v-for="option of options"
                      :key="option.value"
                      @click="selectOption(option)"
                      :class="{selectedItem: option.value === selectedOption}"
              >
                  {{  entityLocales[option.value] }}
              </div>
          </div>
      </div>


  </div>
</template>

<style scoped>
.my-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    height: 47px;
    line-height: 47px;

}
.my-select .selected {
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid var(--gray);
    color: #fff;
    padding: 0 2em 0 1em;
    cursor: pointer;
    user-select: none;
}
.my-select .selected.open {
    border: 1px solid var(--primary);
    border-radius: 6px 6px 0px 0px;
}
.my-select .selected:after {
    position: absolute;
    content: "";
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}
.my-select .items {
    color: #fff;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid var(--primary);
    border-left: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
    position: absolute;
    background-color: #212121;
    left: 0;
    right: 0;
    z-index: 1;
}
.my-select .items div {
    color: #fff;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
}
.my-select .items div:hover {
    background: var(--primary);
    background: linear-gradient(90deg, var(--primary) 20%, var(--secondary) 75%);
}
.my-select .items div.selectedItem {
    background: rgba(58, 241, 214, 0.69);
}
.selectHide {
    display: none;
}
</style>