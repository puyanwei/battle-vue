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
            this.computerHealth -= this.randomNumber(10, 3);
        },
        specialAttack: function() {
            this.computerHealth -= this.randomNumber(30, 5);
        },
        heal: function() {
            this.playerHealth += 10;
        },
        restart: function() {
            this.isRunning = false;
            this.playerHealth = 100;
            this.computerHealth = 100;
        },
        randomNumber: function(min, max) {
            return Math.floor(Math.random() * min, max);
        },
    },
});
