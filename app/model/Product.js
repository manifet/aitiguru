Ext.define("test-aitiguru.model.Product", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int" },
    { name: "name", type: "string" },
    { name: "description", type: "string" },
    { name: "price", type: "float" },
    { name: "quantity", type: "int" },
  ],
});
