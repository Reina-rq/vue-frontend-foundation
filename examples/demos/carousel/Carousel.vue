<script setup lang="ts">
import { ref } from 'vue'

// Clases de color por slide (tokens del sistema).
const slides = ['bg-primary text-white', 'bg-warning text-ink', 'bg-success text-white']
const slide = ref(0)
function goSlide(n: number) {
  slide.value = (n + slides.length) % slides.length
}
</script>

<template>
  <div class="carousel carousel-fade w-100 max-w-420">
    <div class="carousel-inner h-140">
      <div v-for="(s, i) in slides" :key="i" class="carousel-item" :class="{ active: slide === i }">
        <div class="d-flex align-items-center justify-content-center fw-800 fs-18 h-140" :class="s">Slide {{ i + 1 }}</div>
      </div>
    </div>
    <button class="carousel-control-prev" @click="goSlide(slide - 1)"><span class="carousel-control-prev-icon"></span></button>
    <button class="carousel-control-next" @click="goSlide(slide + 1)"><span class="carousel-control-next-icon"></span></button>
    <div class="carousel-indicators">
      <button v-for="i in slides.length" :key="i" :class="{ active: slide === i - 1 }" @click="goSlide(i - 1)"></button>
    </div>
  </div>
</template>
