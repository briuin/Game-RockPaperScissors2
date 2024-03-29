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
  connection: Object,
});

let player = ref(new Player());

let opponent = ref(new Player());
let resultMessage = ref("");
let joined = false;

const choose = (option) => {
  if (player.value.choice || !opponent.value.name) {
    return;
  }
  player.value.choice = option;
  getSocket().emit("choose", option);
};

const reset = () => {
  resultMessage.value = "";
  player.value.choice = GameOption.Unknown;
  opponent.value = new Player();
};

const nextRound = () => {
  reset();
  getSocket().emit("nextRound", player.value.name);
};

const getSocket = () => {
  return props.connection.socket;
};

onMounted(() => {
  player.value = { ...player.value, name: props.connection.user.username };

  getSocket().on("connect", () => {
    // getSocket().emit("join", player.value.name);
  });

  getSocket().on("infoUpdated", (info) => {
    player.value = { ...player.value, name: info.username };

    if (!joined) {
      getSocket().emit("join", player.value.name);
    }
  });

  getSocket().on("error", (data) => {
    alert(data);
  });

  getSocket().on("opponentJoined", (data) => {
    opponent.value.name = data;
  });

  getSocket().on("opponentMakeChoice", () => {
    opponent.value.madeChoice = true;
  });

  getSocket().on("opponentLeave", () => {
    reset();
  });

  getSocket().on("result", (data) => {
    opponent.value.choice = data.opponentChoice;
    setTimeout(() => {
      resultMessage.value = data.winner ? `${data.winner} Win!` : `Draw!`;
    }, 500);
  });
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
    z-index: 200;
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
