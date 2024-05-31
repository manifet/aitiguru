Ext.define('test-aitiguru.view.ProductGrid', {
    extend: 'Ext.panel.Panel',
    xtype: 'productgrid',
    requires: [
        'Ext.grid.Panel',
        'Ext.form.field.Text',
        'test-aitiguru.store.ProductStore'
    ],
    items: [
        {
            xtype: 'form',
            
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'ID',
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() === e.ENTER) {
                                const grid = field.up('productgrid').down('grid');
                                const store = grid.getStore();
                                store.clearFilter();
                                if (field.getValue()) {
                                    store.filter('id', field.getValue());
                                }
                            }
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Description',
                    listeners: {
                        specialkey: function(field, e) {
                            if (e.getKey() === e.ENTER) {
                                const grid = field.up('productgrid').down('grid');
                                const store = grid.getStore();
                                store.clearFilter();
                                if (field.getValue()) {
                                    store.filter('description', field.getValue());
                                }
                            }
                        }
                    }
                }
            ]
        },
        {
            xtype: 'grid',
            store: {
                type: 'ProductStore'
            },
            columns: [
                { text: 'ID', dataIndex: 'id' },
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Description', dataIndex: 'description', flex: 1 },
                { text: 'Price', dataIndex: 'price' },
                { 
                    text: 'Quantity', 
                    dataIndex: 'quantity',
                    renderer: function (value, metaData) {
                        if (value === 0) {
                            metaData.style = 'color: red;';
                        }
                        return value;
                    }
                }
            ],
            flex: 1
        }
    ]
});
