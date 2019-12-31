<template>
  <div id="app">
    <button @click="generateCardDeck">Generate card deck</button>
    <br>
    <pre>
      {{ cardDeck }}
    </pre>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
      cardDeck: [],
      cardColors: [
        {
          color: 'clubs',
        },
        {
          color: 'diamonds',
        },
        {
          color: 'hearts',
        },
        {
          color: 'spades',
        }
      ],
      cardNumbers: [
        {
          symbol: 'ace',
          score: 10
        },
        {
          symbol: 'king',
          score: 10
        },
        {
          symbol: 'queen',
          score: 10
        },
        {
          symbol: 'jack',
          score: 10
        },
        {
          symbol: 'ten',
          score: 10
        },
        {
          symbol: 'nine',
          score: 9
        },
        {
          symbol: 'eight',
          score: 8
        },
        {
          symbol: 'seven',
          score: 7
        },
        {
          symbol: 'six',
          score: 6
        },
        {
          symbol: 'five',
          score: 5
        },
        {
          symbol: 'four',
          score: 4
        },
        {
          symbol: 'three',
          score: 3
        },
        {
          symbol: 'two',
          score: 2
        }
      ]
  }),
  methods: {
    generateCardDeck: function () {
      let cardColors = this.cardColors;
      let cardNumbers = this.cardNumbers;
      let c,n;

      for (c in cardColors) {
        let color = cardColors[c];
        for (n in cardNumbers) {
          let number = cardNumbers[n];
          let cardDeckItem = {};
          cardDeckItem = Object.assign(cardDeckItem, number,color);
          this.cardDeck.push(cardDeckItem)
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
