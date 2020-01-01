<template>
    <div id="app">
        <button @click="generateCardDeck">Generate card deck</button>
        <br>
        <!--TODO card component --->
        <div class="card" v-for="(card, index) in cardDeck" v-bind:key="index">
            <div :class="[card.symbol, card.color]"></div>
        </div>
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
                this.cardDeck = [];
                let cardColors = this.cardColors;
                let cardNumbers = this.cardNumbers;
                let c, n;

                for (c in cardColors) {
                    let color = cardColors[c];
                    for (n in cardNumbers) {
                        let number = cardNumbers[n];
                        let cardDeckItem = {};
                        cardDeckItem = Object.assign(cardDeckItem, number, color);
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

    .card {
        transform: scale(.8);
        width: 200px;
        height: 278px;
        float: left;
        margin: 5px;
        border: 0 solid #000;
        border-radius: 18px;
        box-shadow: 0 2px 3px 0 rgba(0,0,0,.3);
        transition-property: transform,box-shadow;
        transition-duration: .3s;
        transition-timing-function: ease-out;
    }
    .card * {
        width: 200px;
        height: 278px;

    }

    .clubs {
        background: url('~@/assets/clubs.png');
        background-size: 505% auto;
    }

    .diamonds {
        background: url('~@/assets/diamonds.png');
        background-size: 505% auto;
    }

    .hearts {
        background: url('~@/assets/hearts.png');
        background-size: 505% auto;
    }

    .spades {
        background: url('~@/assets/spades.png');
        background-size: 505% auto;
    }

    .ace {
        background-position: 0 0;
    }

    .king {
        background-position: -404px -576px;
    }

    .queen {
        background-position: -202px -576px;
    }

    .jack {
        background-position: 0 -576px;
    }

    .ten {
        background-position: -808px -288px;
    }

    .nine {
        background-position: -606px -288px;
    }

    .eight {
        background-position: -404px -288px;
    }

    .seven {
        background-position: -202px -288px;
    }

    .six {
        background-position: 0 -288px;
    }

    .five {
        background-position: -808px 0;
    }

    .four {
        background-position: -606px 0;
    }

    .three {
        background-position: -404px 0;
    }

    .two {
        background-position: -202px 0;
    }
</style>
