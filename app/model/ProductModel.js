Ext.define("test-aitiguru.model.ProductModel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int", validators: [{ type: 'range', min: 0 }] },
    { name: "name", type: "string", validators: [{ type: 'presence' }] },
    { name: "description", type: "string", validators: [{ type: 'presence' }] },
    { name: "price", type: "float", validators: [{ type: 'range', min: 0 }] },
    { name: "quantity", type: "int", validators: [{ type: 'range', min: 0 }] }
  ]
});
