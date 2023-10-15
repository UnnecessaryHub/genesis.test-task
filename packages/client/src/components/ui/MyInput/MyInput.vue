<script setup lang="ts">
  interface IProps{
      modelValue:String;
      placeholder?:String;
      disabled?:Boolean;
      label?:String
  }
  const {value,placeholder,disabled,label} = withDefaults( defineProps<IProps>(),{
      disabled:false,
      placeholder:''
  })
</script>

<template>
  <div class="my-input-wrapper">
      <input class="my-input" type="text" id="my-input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" :disabled="disabled"/>
      <label v-if="label" class="my-input-label" for="my-input">{{label}}</label>
  </div>
</template>


<style scoped>
.my-input-wrapper{
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
}
.my-input{
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--gray);
    outline: 0;
    font-size: 1.3rem;
    color: var(--white);
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
}
.my-input::placeholder{
    color: transparent;
}
.my-input:placeholder-shown ~ .my-input-label{
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
}

.my-input-label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: var(--gray);
}
.my-input:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, var(--primary), var(--secondary));
    border-image-slice: 1;
}
.my-input:focus ~ .my-input-label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: var(--secondary);
        font-weight: 700;
}

.my-input:required,.my-input:invalid {
    box-shadow: none;
}
</style>