<template>
  <div :class="cls">
    <th-form ref="ruleFormRef" :rules="props.rules" :model="ruleFormModel" :label-width="props.labelWidth">
      <template v-for="item in columns" :key="item.prop">
        <th-form-item :class="getFormItemClass(item)" :label="item.label" :prop="item.prop" v-if="item.show ?? true">
          <slot :name="item.prop" :data="item" :formData="ruleFormModel" v-if="item.slot"></slot>
          <component :is="item.component" v-bind="item.props" v-on="item.event ?? {}" v-model="ruleFormModel[item.prop]"
            v-else></component>
        </th-form-item>
      </template>
    </th-form>
    <div v-if="props.showOperation" :class="clsOperation">
      <th-button :type="'primary'" v-on:click="submit">提交</th-button>
      <th-button :type="'warning'" v-on:click="resetForm">重置</th-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useName } from "../hook/useName"
import { FormAutoColumnsProps, ThFormAutoInstance } from './formAuto';
import { FormInstance } from 'element-plus';
import { ThRef } from '../common';
import * as _ from 'lodash';

defineOptions({
  name: 'ThTormAuto'
})

interface IFormAuto {
  labelWidth?: number,
  showCount?: number,
  columns?: Array<FormAutoColumnsProps>,
  modelValue?: any,
  rules?: any,
  showOperation?: boolean,
}
const props = withDefaults(defineProps<IFormAuto>(), {
  labelWidth: 80,
  columns: () => [],
  modelValue: {},
  rules: {},
  showOperation: true,
  query:false
})

//样式处理
const ns = useName('form-auto')
const cls = computed(() => [
  ns.base(),
])

const clsOperation = computed(() => [
  ns.is('right'),
])

const getFormItemClass = (e: FormAutoColumnsProps) => {
  return [
    ns.is(`flex-${e.span ?? 24}`),
  ]
}

//变量声明
const columns = ref<Array<FormAutoColumnsProps>>([]);
const ruleFormModel = ref<any>({})
const ruleFormRef = ref<ThRef<FormInstance>>()

onMounted(() => {
  nextTick(() => {
    init()
  })
})

const init = () => {
  ruleFormModel.value = _.cloneDeep(props.modelValue ?? {})
  columns.value = _.cloneDeep(props.columns ?? [])
  columns.value.forEach((e) => {
    e.props ?? (e.props = {})
    switch (e.component) {
      case 'ThInput':
        e.props.placeholder = `请输入${e.label}`
        break;
      case 'ThSelect':
        e.props.placeholder = `请选择${e.label}`
        break;
      case 'ThDatePicker':
        e.props.placeholder = `请选择${e.label}`
        break;
    }
  })
}

const submit = () => {
  return new Promise((resolve, reject) => {
    ruleFormRef.value!.getRef().validate((valid, fields) => {
      if (valid) {
        resolve(ruleFormModel)
        emits("onSubmit", ruleFormModel)
      } else {
        reject(fields)
      }
    })
  })
}

const resetForm = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.getRef().resetFields()
  emits("update:modelValue", ruleFormModel.value)
}

// 监听变化
watch(() => props.columns, () => {
  init()
}, { deep: true });

watch(() => ruleFormModel.value, (newVal) => {
  if(JSON.stringify(newVal)!==JSON.stringify(props.modelValue)){
    emits("update:modelValue", newVal)
  }
}, { deep: true })

watch(() => props.modelValue, (newVal) => {
  // emits("update:modelValue", newVal)
  ruleFormModel.value = _.cloneDeep(props.modelValue ?? {})
}, { deep: true })

const emits = defineEmits<{
  (e: 'onSubmit', val: any): void
  (e: 'update:modelValue', val: any): void
}>()

defineExpose<ThFormAutoInstance>({submit,resetForm })

</script>