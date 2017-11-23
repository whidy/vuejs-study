
Vue.component('greeting', {
  template: '<p> Hey there, I am a {{name}}. <button v-on:click="changeName">Change name</button></p>',
  data: function () {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Mario';
    }
  }
})
var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'vue app one'
  },
  methods: {

  },
  computed: {
    greet: function () {
      return 'hello from app one';
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'vue app two'
  },
  methods: {
    changeTitle: function () {
      one.title = "title changed";
    }
  },
  computed: {
    greet: function () {
      return 'hello from app two';
    }
  }
});

two.title = "changed from outside";