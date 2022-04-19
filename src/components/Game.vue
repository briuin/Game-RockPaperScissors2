<template>
  <div :class="$style.game">
    <div v-if="resultMessage">
      <div :class="$style.modal_overlay">
        <div :class="$style.modal_container">
          <div :class="$style.modal_content">
            <div :class="$style.result_text">{{ resultMessage }}</div>
            <button type="button" :class="$style.join_next" @click="nextRound">
              Join Next PK
            </button>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.gamearea">
      <div :class="$style.opponent">
        <div :class="$style.name" v-if="opponent.name">{{ opponent.name }}</div>
        <div :class="[$style.name, $style.waiting]" v-else>
          waiting for opponent...
        </div>
        <div :class="$style.ready" v-if="opponent.madeChoice && !player.choice">
          Ready
        </div>
        <div :class="$style.ready" v-if="!opponent.madeChoice && player.choice">
          Waiting
        </div>
        <GameOptionComponent :choice="opponent.choice" />
      </div>
      <hr :class="$style.middle_line" />
      <div :class="$style.player">
        <GameOptionComponent :choice="player.choice" />
        <div :class="$style.name">{{ player.name }}</div>
      </div>
    </div>
    <div :class="$style.option">
      <div @click="choose(GameOption.Rock)" :class="$style.rock"></div>
      <div @click="choose(GameOption.Paper)" :class="$style.paper"></div>
      <div @click="choose(GameOption.Scissors)" :class="$style.scissors"></div>
    </div>
  </div>
</template>

<script setup>
// import { CONFIG } from "../environment";
import GameOptionComponent from "./GameOption.vue";
import { GameOption } from "../enums/GameOption";
import { HubAction } from "../enums/HubAction";
import { Player } from "../models/player";
import { onMounted, ref } from "vue";

const props = defineProps({
  playerDetail: Object,
});

let player = ref(new Player());

let opponent = new Player();
let connection;
let resultMessage = "";

const choose = (option) => {
  if (player.value.choice || !opponent.name) {
    return;
  }
  player.value.choice = option;
  // connection.invoke(HubAction.Choose, option);
};

const reset = () => {
  resultMessage = "";
  player.value.choice = GameOption.Unknown;
  opponent = new Player();
};

const nextRound = () => {
  reset();
  // connection.invoke(HubAction.NextRound, this.player.name);
};

onMounted(() => {
  player.value = { ...player.value, ...props.playerDetail };
  opponent.name = "test";
  /*this.connection = new HubConnectionBuilder().withUrl(CONFIG.HUB_URL).build();

  this.connection.on("error", (data) => {
    alert(data);
  });

  this.connection.on("opponentJoined", (data) => {
    this.opponent.name = data;
  });

  this.connection.on("opponentMakeChoice", () => {
    this.opponent.madeChoice = true;
  });

  this.connection.on("opponentLeave", () => {
    this.reset();
  });

  this.connection.on("result", (data) => {
    this.opponent.choice = data.opponentChoice;
    setTimeout(() => {
      this.resultMessage = data.winner ? `${data.winner} Win!` : `Draw!`;
    }, 500);
  });

  this.connection
    .start()
    .then(() => this.connection.invoke(HubAction.Join, this.player.name));*/
});
</script>

<style lang="scss" module>
$GAME_MAX_WIDTH: 300px;

.game {
  display: flex;
  width: $GAME_MAX_WIDTH;
  margin: 0 auto;
  flex-direction: column;
}

.gamearea {
  position: fixed;
  height: 60vh;
  max-height: 500px;
  width: 100%;
  max-width: $GAME_MAX_WIDTH;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
}

.option {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 10px;
  width: 100%;
  max-width: $GAME_MAX_WIDTH;
  margin: 0 auto;
  left: 0;
  right: 0;
}

.option > div {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.rock {
  background: url("../assets/rock.png") no-repeat;
  background-size: contain;
}

.paper {
  background: url("../assets/paper.png") no-repeat;
  background-size: contain;
}

.scissors {
  background: url("../assets/scissors.png") no-repeat;
  background-size: contain;
}

.opponent,
.player {
  height: 30vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.opponent {
  justify-content: flex-start;
}

.player {
  justify-content: flex-end;
}

.name {
  font-size: 1.5em;

  &.waiting {
    color: orangered;
  }
}

.middle_line {
  border-top: dotted 1px;
  margin: 0.2em;
}

.ready {
  font-size: 1.5em;
  color: cadetblue;
  height: 30vh;
  display: flex;
  align-items: center;
}

.modal {
  &_overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    left: 0;
    top: 0;
    z-index: 1000;
  }

  &_container {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 0;
    right: 0;
  }

  &_content {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }
}

.join_next {
  height: 35px;
  font-size: 1.2em;
  background: aquamarine;
  cursor: pointer;
  color: darkslategray;
}

.result_text {
  font-size: 2em;
  text-align: center;
  margin-bottom: 50px;
  color: aquamarine;
}
</style>
