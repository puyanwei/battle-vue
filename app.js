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
            this.clearLog();
        },
        attackController: function(attacker, maxRange, minRange) {
            let receiver = this.setReceiver(attacker);
            let damage = this.randomDamage(maxRange, minRange);
            this.deductEnemyHealth(attacker, damage);
            this.addToLog(attacker, receiver, damage);
        },

        deductEnemyHealth: function(attacker, damage) {
            if (attacker === 'player') {
                this.computerHealth -= damage;
            } else {
                this.playerHealth -= damage;
            }
        },
        attack: function() {
            this.attackController('player', 10, 3);
            if (this.checkWin()) {
                return;
            }
            this.attackController('computer', 10, 3);
            this.checkWin();
        },
        specialAttack: function() {
            this.attackController('player', 30, 5);
            this.attackController('computer', 30, 5);
            this.checkWin();
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + 10,
            });
        },
        randomDamage: function(max, min) {
            return Math.floor(Math.random() * max, min);
        },
        checkWin: function() {
            if (this.computerHealth <= 0) {
                this.alertBox('YOU WIN! New Game?');
                return true;
            } else if (this.playerHealth <= 0) {
                this.alertBox('LOSER!!! New Game?');
                return true;
            }
            return false;
        },
        alertBox: function(message) {
            if (confirm(message)) {
                this.isRunning = false;
                this.startGame();
            } else {
                this.isRunning = false;
            }
            return true;
        },
        restart: function() {
            this.isRunning = false;
            this.startGame();
        },
        addToLog: function(attacker, receiver, damage) {
            this.turns.unshift({
                isPlayer: attacker === 'player',
                text: attacker + ' hits ' + receiver + ' for ' + damage,
            });
        },
        clearLog: function() {
            this.turns = [];
        },
        setReceiver: function(attacker) {
            if (attacker === 'player') {
                return 'computer';
            } else {
                return 'player';
            }
        },
        damageOutput: function(attacker, health) {
            if (attacker === 'player') {
                damage = this.randomDamage(maxRange, minRange);
                this.computerHealth -= damage;
            }
        },
    },
});
