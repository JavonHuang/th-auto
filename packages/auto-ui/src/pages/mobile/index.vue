<template>
  <div class="block">
    <thm-button size="small">fdf</thm-button>
    <thm-button size="small" type="primary">主要按钮</thm-button>
    <thm-button size="small" type="success">成功按钮</thm-button>
    <thm-button size="small" type="default">默认按钮</thm-button>
    <thm-button size="small" type="danger">危险按钮</thm-button>
    <thm-button size="small" type="warning">警告按钮</thm-button>
  </div>
  <div class="block">
    <thm-cell-group>
      <thm-cell title="单元格" value="内容" />
      <thm-cell title="单元格" value="内容" label="描述信息" />
    </thm-cell-group>
  </div>
  <div class="block">
    <thm-cell-group inset>
      <thm-cell title="单元格" value="内容" />
      <thm-cell title="单元格" value="内容" label="描述信息" />
    </thm-cell-group>
  </div>
  <div class="block">
    <thm-cell-group inset>
      <thm-cell title="单元格" value="内容" icon="location-o"/>
    </thm-cell-group>
  </div>
  <div class="block">
    <thm-row gutter="20" justify="center">
      <thm-col span="6">span: 8</thm-col>
      <thm-col span="6">span: 8</thm-col>
      <thm-col span="6">span: 8</thm-col>
    </thm-row>
  </div>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.block{
  margin: 8px 0;
}
</style>