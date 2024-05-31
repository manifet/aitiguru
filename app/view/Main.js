Ext.define('test-aitiguru.view.Main', {
    extend: 'Ext.window.Window',
    xtype: 'main',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    title: 'Main',
    width: 800,
    height: 600,
    layout: 'border',
    items: [
        {
            region: 'north',
            xtype: 'toolbar',
            items: [
                {
                    text: 'Products',
                    action: 'showProducts'
                },
                {
                    text: 'Logout',
                    action: 'logout'
                }
            ]
        },
        {
            region: 'center',
            xtype: 'tabpanel',
        }
    ]
});
