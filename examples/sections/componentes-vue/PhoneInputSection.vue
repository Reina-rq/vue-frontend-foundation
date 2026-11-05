<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import PhoneInputDemo from '../../demos/componentes-vue/PhoneInputDemo.vue'
import phoneInputDemoSrc from '../../demos/componentes-vue/PhoneInputDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-phone-input" title="PhoneInput">
    <template #lead>Código de país + número. <code>v-model</code> en formato <code>"+591 70000000"</code>.</template>
    <DemoBlock full :source="phoneInputDemoSrc"><PhoneInputDemo /></DemoBlock>
  </DocSection>
</template>
