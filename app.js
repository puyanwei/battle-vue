new Vue({
    el: app,
    data: {
        playerHealth: 100,
        computerHealth: 100,
        isRunning: false,
    },
    methods: {
        startGame: function() {
            this.isRunning = true;
            this.playerHealth = 100;
            this.computerHealth = 100;
        },
        attack: function() {
            this.computerHealth -= this.randomDamage(10, 3);
            this.playerHealth -= this.randomDamage(10, 3);
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
            this.playerHealth += 10;
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
                if (confirm('YOU WON! New Game?')) {
                    this.startGame();
                } else {
                    this.isRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('LOSER!!! New Game?')) {
                    this.startGame();
                } else {
                    this.isRunning = false;
                }
                return true;
            }
            return false;
        },
    },
});
