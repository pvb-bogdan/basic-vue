new Vue({
    el:'#exercise',
    data: {
        name: 'Bogdan',
        age: 46,
        linkImg: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    methods: {
        tripleAge: function() {
            return this.age * 3;
        },
        randomNum: function() {
            let test = Math.floor(Math.random() * 3);
            return test;
        }
    }
})