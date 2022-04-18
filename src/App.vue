<script setup>
import Game from "./components/Game.vue";
import { ref, computed } from "vue";

const props = defineProps({
  player: String,
});

const playerObj = computed(() => {
  if (isDevelopmentMode()) {
    return { name: `p${Math.floor(Math.random() * 10000)}` };
  }
  return isJsonString(props.player) ? JSON.parse(props.player) : props.player;
});

const shouldCreateGame = computed(() => {
  return props.player || isDevelopmentMode();
});

const isDevelopmentMode = () => true;

const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
</script>

<template>
  <Game v-if="shouldCreateGame" :playerDetail="playerObj"></Game>
</template>
