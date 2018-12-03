new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function () {
                alert('alert');
            },
            getValue: function (e) {
                return this.value;
            }
        }
    });