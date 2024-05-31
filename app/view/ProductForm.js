Ext.define('test-aitiguru.view.ProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'productform',
    title: 'Edit Product',
    layout: 'fit',
    modal: true,
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            defaults: {
                anchor: '100%',
                allowBlank: false
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Name'
                },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Description'
                },
                {
                    xtype: 'numberfield',
                    name: 'price',
                    fieldLabel: 'Price',
                    minValue: 0,
                    step: 0.01
                },
                {
                    xtype: 'numberfield',
                    name: 'quantity',
                    fieldLabel: 'Quantity',
                    minValue: 0
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    formBind: true,
                    disabled: true,
                    action: 'saveProduct'
                },
                {
                    text: 'Cancel',
                    action: 'cancelEdit'
                }
            ]
        }
    ]
});
