<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import NotifyDemo from '../../demos/componentes-vue/NotifyDemo.vue'
import notifyDemoSrc from '../../demos/componentes-vue/NotifyDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-notify" title="Notificaciones">
    <template #lead><code>useNotify()</code> + <code>&lt;NotificationHost /&gt;</code>: <code>success</code>, <code>error</code>, <code>warning</code>, <code>info</code> (título y mensaje opcional).</template>
    <DemoBlock full :source="notifyDemoSrc"><NotifyDemo /></DemoBlock>
  </DocSection>
</template>
