Ext.define("test-aitiguru.view.Login", {
  extend: "Ext.window.Window",
  xtype: "login",
  requires: ["Ext.form.Panel"],
  title: "Login",
  closable: false,
  modal: true,
  autoShow: true,
  items: {
    xtype: "form",
    bodyPadding: 10,
    items: [
      {
        xtype: "textfield",
        name: "username",
        fieldLabel: "Username",
        allowBlank: false,
      },
      {
        xtype: "textfield",
        name: "password",
        fieldLabel: "Password",
        inputType: "password",
        allowBlank: false,
      },
    ],
    buttons: [
      {
        text: "Login",
        formBind: true,
        disabled: true,
        action: "logIn",
      },
    ],
  },
});
