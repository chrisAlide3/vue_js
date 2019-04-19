new Vue( {
    el: '#app',
    data: {
        newGame: true,
        monsterMoves: [],
        playerMoves: [],
        playerResult: 100,
        monsterResult: 100,
    },
    methods: {
        attack: function(type) {
            var min = 0;
            var max = 0;
            var monsterMove = 0;
            var playerMove = 0;

            if (type == 'normal') {
                min = 1;
                max = 10;
            } else if (type == 'special'){
                min = 1;
                max = 20;
            };

            monsterMove = this.generateRandom(min, max);
            this.monsterMoves.push({'type': "hits", 'move': monsterMove});
            this.playerResult = this.playerResult - monsterMove;

            playerMove = this.generateRandom(min, max);
            this.playerMoves.push({'type': "hits", 'move': playerMove});
            this.monsterResult = this.monsterResult - playerMove;

            this.checkEnd();
        },


        heal: function() {
            var min = 1;
            var max = 10;
            var monsterMove = 0;
            var playerMove = 0;

            if (this.playerResult < 100) {
                monsterMove = this.generateRandom(min, max);
                this.monsterMoves.push({'type': "heals", 'move': monsterMove});
                this.monsterResult = this.monsterResult + monsterMove;
                if (this.monsterResult > 100) {
                    this.monsterResult = 100;
                }

                playerMove = this.generateRandom(min, max);
                this.playerMoves.push({'type': "heals", 'move': playerMove});
                this.playerResult = this.playerResult + playerMove;
                if (this.playerResult > 100) {
                    this.playerResult = 100;
                }
            };
        },

        giveUp: function() {
            this.newGame = true,
            this.monsterMoves = [],
            this.playerMoves = [],
            this.playerResult = 100,
            this.monsterResult = 100
        },

        generateRandom: function(min, max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        },

        checkEnd: function() {
            if (this.playerResult < 1 & this.monsterResult>this.playerResult) {
                alert("You lose!");
            } else if (this.monsterResult < 1 & this.playerResult>this.monsterResult) {
                    alert("You win!")
            };
        }
    }

});