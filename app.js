Ext.application({
    name: 'test-aitiguru',
    requires: [
        'test-aitiguru.view.Login',
        'test-aitiguru.view.Main',
        'test-aitiguru.view.ProductGrid',
        'test-aitiguru.view.ProductForm'
    ],
    controllers: ['MainController'],
    launch: function() {
        Ext.create('test-aitiguru.view.Login').show();
    }
});
