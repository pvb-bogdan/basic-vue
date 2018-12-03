new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        link: 'http://www.google.com',
        finishedLink: '<a href="http://www.petrebogdan.com" target="_blank">My site</a>',
        counter: 0
    },
    methods: {
        changeTitle: function (e) {
            this.title = e.target.value;
        },
        sayHello: function () {
            return 'Fuck of!';
        },
        useThis: function () {
            return this.title; // in js vanilla not work, but in vue we get access to all the data and methods in the insatnces of new Vue whit this word
        },
        increase: function () {
            this.counter++;
        }
    }
})