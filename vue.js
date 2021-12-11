let app = new Vue({
  el: "#app",
  data: {
    foods: ["alo", "potol", "lao", "komra"],
    alert: {
      success: false,
      warning: false,
      danger: false,
      msg: null,
    },
    newfood: null,
  },
  methods: {
    addfood: function () {
      if (this.newfood === null) {
        this.alert.danger = true;
        this.alert.msg = "field must not be empty !";
      } else if (this.newfood != null) {
        this.alert.danger = false;
        this.alert.success = true;
        this.alert.msg = this.newfood + " added successfully";
      }
    },
  },
});
