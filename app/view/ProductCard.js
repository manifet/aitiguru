Ext.define("test-aitiguru.view.ProductCard", {
  extend: "Ext.window.Window",
  xtype: "productcard",
  title: "Edit Product",
  layout: "fit",
  modal: true,
  items: [
    {
      xtype: "form",
      bodyPadding: 10,
      defaults: {
        anchor: "100%",
        allowBlank: false,
      },
      items: [
        {
          xtype: "displayfield",
          name: "name",
          fieldLabel: "Name"
        },
        {
          xtype: "displayfield",
          name: "description",
          fieldLabel: "Description"
        },
        {
          xtype: "numberfield",
          name: "price",
          fieldLabel: "Price",
          step: 0.01,
          minValue: 0
        },
        {
          xtype: "numberfield",
          name: "quantity",
          fieldLabel: "Quantity",
          minValue: 0
        },
      ],
      buttons: [
        {
          text: "Save",
          formBind: true,
          disabled: true,
          action: "saveProduct"
        },
        {
          text: "Cancel",
          action: "cancelEdit"
        },
      ],
    },
  ],
});
