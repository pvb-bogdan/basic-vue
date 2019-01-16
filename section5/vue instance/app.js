// to acces any other vue instance we need to assign every vue instance to an variable - always keep in mind that this is a js file, so we can writte vanilla js.

let vm1 = new Vue({
    el:'#app1',
    data: {
        title: 'Title app 1',
        showParagraph: false
    },
    methods: {
        show: function (){
            this.showParagraph= true,
            this.updateTitle('THIS IS THE TITLE NOW')
        },
        updateTitle: function (title){
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function (){
            return this.title.toLowerCase();
        } 
    },
    watch:{
        title: function(value) {
            alert('this title was changed to ' + value)
        }
    }
});

setTimeout(function(){
    vm1.title = 'title set by time out'
},3000)

let vm2 = new Vue({
    el:'#app2',
    data: {
        title: 'Title in app 2'
    },
    methods: {
        changeVueOneTitle: function (){
            vm1.title = 'changed bt vue 2 action'
        }
    }
});