<template>
  <div>
    <input type="file" @change="onFileChange" accept=".xlsx" />
    <input type="file" @change="onFileChange2" accept=".xlsx" />
    <th-button v-on:click="checkNum">检查数量</th-button>
  </div>
</template>

<script setup lang='ts'>
import { ThExcel } from 'th-ui-plus';
import _ from 'lodash'
import { ref } from 'vue';
const execl1 = ref()
const execl2 = ref()
const onFileChange = async (event:any) => {
    const thExcel=new ThExcel( event.target.files[0])
    let worksheet =await thExcel.readSheet(0)
    let obj = {}
    worksheet.eachRow((row, rowNumber) => {
      let r ={
        'object':row.getCell(17).value,
        'module':row.getCell(19).value
        }
      if(obj[r.module]){
        obj[r.module].push(r.object)
        obj[r.module]=_.uniq(obj[r.module]).sort()
      }else if(r.module && r.module !=='分册名'){
        obj[r.module] = []
        obj[r.module].push(r.object)
      }
    });
    execl1.value = obj
  };

  const onFileChange2 = async (event:any) => {
    const thExcel=new ThExcel( event.target.files[0])
    let worksheet =await thExcel.readSheet(0)
    let obj = {}
    worksheet.eachRow((row, rowNumber) => {
      let r ={
        'object':row.getCell(6).value!=null?row.getCell(6).value: row.getCell(5).value,
        'module':row.getCell(3).value,
        }

      if(obj[r.module]){
        obj[r.module].push(r.object)
        obj[r.module]=_.uniq(obj[r.module]).sort()
      }else if(r.module && r.module !=='分册名'){
        obj[r.module] = []
        obj[r.module].push(r.object)
      }
    });
    execl2.value = obj
  };

  const checkNum=()=>{
    Object.keys(execl1.value).forEach((key)=>{
      if(execl1.value[key].length!=execl2.value[key].length || execl1.value[key].join(',')!=execl2.value[key].join(',')){
        console.log(key,execl1.value[key],execl2.value[key])
      }
    })
  }
</script>

<style lang='scss' scoped>

</style>