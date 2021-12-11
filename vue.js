let app = new Vue({
  el: "#app",
  data: {
    foods: [],
    alert: {
      success: false,
      warning: false,
      danger: false,
      msg: null,
    },
    newfood: null,
  },
  methods: {
    //   Add food
    addfood: function () {
      if (this.newfood === null) {
        this.alert.danger = true;
        this.alert.msg = "field must not be empty !";
      } else if (this.newfood != null) {
        this.alert.danger = false;
        this.alert.success = true;
        this.alert.msg = this.newfood + " added successfully";
        this.foods.push(this.newfood);
        this.newfood = "";
      }
    },

    // Delete food

    deletefood: function (index) {
      this.foods.splice(index, 1);
    },
  },
});
