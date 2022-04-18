<template>
  <div>
    <img
      :class="$style.choice"
      v-if="choice === GameOption.Rock"
      src="../assets/rock.png"
    />
    <img
      :class="$style.choice"
      v-if="choice === GameOption.Paper"
      src="../assets/paper.png"
    />
    <img
      :class="$style.choice"
      v-if="choice === GameOption.Scissors"
      src="../assets/scissors.png"
    />
  </div>
</template>

<script setup>
import { GameOption } from "../enums/GameOption";
const props = defineProps({
  choice: Number,
});
</script>

<style lang="scss" module>
$LARGE_CHOICE_IMAGE: 200px;
$MEDIUM_CHOICE_IMAGE: 150px;

.choice {
  height: $LARGE_CHOICE_IMAGE;
  width: $LARGE_CHOICE_IMAGE;

  @media only screen and (max-width: 480px) {
    width: $MEDIUM_CHOICE_IMAGE;
    height: $MEDIUM_CHOICE_IMAGE;
  }
}
</style>
