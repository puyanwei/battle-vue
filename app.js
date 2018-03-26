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
        },
    },
});
