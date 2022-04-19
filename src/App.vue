<script setup>
import Game from "./components/Game.vue";
import { computed, onMounted } from "vue";

const props = defineProps({
  player: Object,
  connection: Object,
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

const isDevelopmentMode = () => process.env.NODE_ENV === 'development';

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
  <Game
    v-if="shouldCreateGame"
    :connection="connection"
    :playerDetail="playerObj"
  ></Game>
</template>
