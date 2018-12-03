new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function (){
                // if(this.value < 37){
                //     return 'not there yet!';
                // } else {
                //     return 'done'
                // }
                return this.value < 37 ? 'not there yet!' : 'done';
            }
        },
        watch: {
            result: function(){
                let myVar = this;
                setTimeout(function(){
                    myVar.value = 0;
                },5000);
            }
        }
    });