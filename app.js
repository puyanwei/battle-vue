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
            this.attacking('player', true, 10, 3);
            this.attacking('computer', false, 10, 3);
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
        randomDamage: function(max, min) {
            return Math.floor(Math.random() * max, min);
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
        attacking: function(attacker, isPlayer, maxRange, minRange) {
            let damage = this.randomDamage(maxRange, minRange);
            if (isPlayer) {
                this.computerHealth -= damage;
            } else {
                this.playerHealth -= damage;
            }
            if (
                this.turns.unshift({
                    isPlayer: isPlayer,
                    text: attacker + ' hits Computer for ' + damage,
                })
            ) {
            }
        },
    },
});
