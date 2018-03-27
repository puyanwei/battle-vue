new Vue({
    el: app,
    data: {
        playerHealth: 100,
        computerHealth: 100,
        isRunning: false,
        turns: [],
    },
    methods: {
        startGame: function() {
            this.isRunning = true;
            this.playerHealth = 100;
            this.computerHealth = 100;
        },
        attack: function() {
            this.playerAttacks();
            this.computerAttacks();
            if (this.checkWin()) {
                return;
            }
        },
        specialAttack: function() {
            this.computerHealth -= this.randomDamage(30, 5);
            this.playerHealth -= this.randomDamage(30, 5);
            if (this.checkWin()) {
                return;
            }
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
        },
        restart: function() {
            this.isRunning = false;
            this.playerHealth = 100;
            this.computerHealth = 100;
        },
        randomDamage: function(min, max) {
            return Math.floor(Math.random() * min, max);
        },
        checkWin: function() {
            if (this.computerHealth <= 0) {
                this.alertBox('YOU WIN! New Game?');
            } else if (this.playerHealth <= 0) {
                this.alertBox('LOSER!!! New Game?');
            }
            return false;
        },
        alertBox: function(message) {
            if (confirm(message)) {
                this.startGame();
            } else {
                this.isRunning = false;
            }
            return true;
        },
        playerAttacks: function() {
            let computerDamage = this.randomDamage(10, 3);
            this.computerHealth -= computerDamage;
            if (
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Computer for ' + computerDamage,
                })
            ) {
            }
        },
        computerAttacks: function() {
            let playerDamage = this.randomDamage(10, 3);
            this.playerHealth -= playerDamage;

            if (
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Computer hits player for ' + playerDamage,
                })
            ) {
            }
        },
    },
});
