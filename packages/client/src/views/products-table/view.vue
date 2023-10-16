<script setup lang="ts">
interface IColumns{
    label:String,
    key:String
}
interface IProps {
  columns:IColumns[],
  data:any[]
}
const {data,columns} = defineProps<IProps>();
</script>

<template>
  <div class="my-table-wrapper">
    <table class="my-table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        </tr>
      </thead>
      <tbody v-if="data.length">
        <tr v-for="item in data" :key="item.id">
          <td v-for="column in columns" :key="column.key">{{ item[column.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
.my-table-wrapper{
    width: 100%;
    margin: 0 auto;
}
.my-table {
    width: 100%;
    border: none;
    margin-bottom: 20px;
    color: var(--white);
    position: relative;
}
.my-table thead th {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 6px 6px;
    background: var(--primary);
    font-size: 1.2rem;
    border-radius: 0;
    color: white;
}
.my-table tbody td {
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    vertical-align: top;
    border: 1px solid #d7d7d7;
}
.my-table tbody tr:nth-child(even){
    background: rgba(179, 57, 215, 0.3);
}

.my-table-wrapper .no-data{
    text-align: center;
    color: var(--gray);
    display: block;
    width: 100%;
    position: absolute;
    top: 500%;
    transform: translateY(-50%);
    font-size: 3rem;
}
</style>