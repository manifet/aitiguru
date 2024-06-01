Ext.define("test-aitiguru.view.ProductGrid", {
  extend: "Ext.panel.Panel",
  xtype: "productgrid",
  requires: [
    "Ext.grid.Panel",
    "Ext.form.field.Text",
    "Ext.form.field.Number",
    "test-aitiguru.store.ProductStore",
  ],
  items: [
    {
      xtype: "form",
      items: [
        {
          xtype: "numberfield",
          fieldLabel: "ID",
          allowDecimals: false,
          itemId: "idFilter",
        },
        {
          xtype: "textfield",
          fieldLabel: "Description",
          itemId: "descriptionFilter",
        },
      ],
    },
    {
      xtype: "grid",
      store: {
        type: "ProductStore",
      },
      columns: [
        { text: "ID", dataIndex: "id" },
        { text: "Name", dataIndex: "name", flex: 1 },
        { text: "Description", dataIndex: "description", flex: 1 },
        { text: "Price", dataIndex: "price" },
        {
          text: "Quantity",
          dataIndex: "quantity",
          renderer: function (value, metaData) {
            if (value === 0) {
              metaData.style = "color: red;";
            }
            return value;
          },
        },
      ],
      flex: 1,
    },
  ],
});
