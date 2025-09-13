<script setup lang="ts"></script>

<template>
  <hr class="divider" />
</template>

<style scoped>
.divider {
  height: 40px;
  border: none;
  margin: 0;
  opacity: 1;
  background-image:
    repeating-linear-gradient(to right, white, white 20px, black 20px, black 40px),
    repeating-linear-gradient(to right, black, black 20px, white 20px, white 40px);
  background-size: 100% 20px;
  background-repeat: repeat-x;
  background-position:
    0 0,
    0 20px;
}
</style>
