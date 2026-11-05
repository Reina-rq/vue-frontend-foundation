<script setup lang="ts">
import { ref } from 'vue'

const seg = ref('a')
</script>

<template>
  <div class="segbtns">
    <button class="segbtn" :class="{ on: seg === 'a' }" @click="seg = 'a'">Uno</button>
    <button class="segbtn" :class="{ on: seg === 'b' }" @click="seg = 'b'">Dos</button>
    <button class="segbtn" :class="{ on: seg === 'c' }" @click="seg = 'c'">Tres</button>
  </div>
</template>
