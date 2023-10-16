
<script setup lang="ts">

import {defineProps} from 'vue'

  interface IProps{
     gap:Number;
     flexDirection: 'row' | 'column';
     alignItems: 'align-center' | 'align-flex-start' | 'align-flex-end' | 'align-stretch' | 'align-baseline';
     justifyContent: 'justify-center' | 'justify-flex-start' | 'justify-flex-end' | 'justify-space-between' | 'justify-space-around' | 'justify-space-evenly';
  }
  const {gap, ...props} = withDefaults(defineProps<IProps>(),{
    gap:8,
    flexDirection:'row',
    alignItems:'align-flex-start',
    justifyContent:'justify-flex-start',
  })
</script>

<template>
  <div class="my-row" :style="{'gap':gap+ 'px'}" :class="Object.values(props).join(' ')">
    <slot />
  </div>
</template>


<style scoped>
  .my-row {
    display: flex;
    justify-content: flex-start;
width: 100%;
  }
  .row{
    flex-direction: row;
  }
  .column{
      flex-direction: column;
  }
  .align-center{
      align-items: center;
  }
  .align-flex-start{
      align-items: flex-start;
  }
  .align-flex-end{
      align-items: flex-end;
  }
  .align-stretch{
      align-items: stretch;
  }
  .align-baseline{
      align-items: baseline;
  }
  .justify-center{
      justify-content: center;
  }
  .justify-flex-start{
      justify-content: flex-start;
  }
  .justify-flex-end{
      justify-content: flex-end;
  }
  .justify-space-between{
      justify-content: space-between;
  }
  .justify-space-around{
      justify-content: space-around;
  }
  .justify-space-evenly{
      justify-content: space-evenly;
  }
</style>