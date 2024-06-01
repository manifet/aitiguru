Ext.define("test-aitiguru.controller.MainController", {
  extend: "Ext.app.Controller",
  init: function () {
    this.control({
      "button[action=logIn]": {
        click: this.logIn,
      },
      "button[action=logOut]": {
        click: this.logOut,
      },
    });
  },

  logIn: function (button) {
    const form = button.up("form").getForm();
    const values = form.getValues();
    if (values.username === "admin" && values.password === "padmin") {
      button.up("window").close();
      Ext.create("test-aitiguru.view.Main").show();
    } else {
      Ext.Msg.alert("Error", "Invalid login or password");
    }
  },

  logOut: function (button) {
    button.up("window").close();
    Ext.create("test-aitiguru.view.Login").show();
  },
});
