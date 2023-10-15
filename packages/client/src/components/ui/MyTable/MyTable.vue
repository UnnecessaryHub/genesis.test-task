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
        <span class="no-data" v-else>Empty</span>
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
    padding: 10px 15px;
    background: var(--primary);
    font-size: 1.2rem;
}
.my-table thead tr th:first-child {
    border-radius: 8px 0 0 8px;
}
.my-table thead tr th:last-child {
    border-radius: 0 8px 8px 0;
}
.my-table tbody td {
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    vertical-align: top;
}
.my-table tbody tr:nth-child(even){
    background: rgba(179, 57, 215, 0.3);
}
.my-table tbody tr td:first-child {
    border-radius: 8px 0 0 8px;
}
.my-table tbody tr td:last-child {
    border-radius: 0 8px 8px 0;
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