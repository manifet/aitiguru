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
    const form = button.up("form").getForm(),
      values = form.getValues();

    if (this.isValidLogin(values)) {
      this.openMainView(button);
    } else {
      Ext.Msg.alert("Error", "Invalid login or password");
    }
  },

  logOut: function (button) {
    button.up("window").close();
    Ext.create("test-aitiguru.view.Login").show();
  },

  isValidLogin: function (values) {
    return values.username === "admin" && values.password === "padmin";
  },

  openMainView: function (button) {
    button.up("window").close();
    Ext.create("test-aitiguru.view.Main").show();
  },
});
