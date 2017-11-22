new Vue({
  el: '#vue-app',
  data: {
    name: '',
    job: 'fe',
    website: 'http://www.whidy.net',
    websiteTag: '<a href="http://www.whidy.net">my blog(output by v-html)</a>',
    age: 20,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    error: false,
    success: false,
    characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    ninjas: [{
        name: 'Ryu',
        age: 25
      },
      {
        name: 'Yoshi',
        age: 35
      },
      {
        name: 'Ken',
        age: 55
      }
    ]
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name;
    },
    add: function (inc) {
      this.age += inc;
    },
    subtract: function (dec) {
      this.age -= dec;
    },
    updateXY: function (event) {
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    logName: function () {
      // console.log('you entered your name');
      // this.name = 
    },
    logAge: function () {
      console.log('you entered your age');
    },
    // addToA: function () {
    //   return this.a + this.age;
    // },
    // addToB: function () {
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA: function () {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function () {
      console.log('addToB');
      return this.b + this.age;
    }
  }
});