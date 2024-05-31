Ext.define('test-aitiguru.view.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    requires: [
        'Ext.form.Panel'
    ],
    title: 'Login',
    closable: false,
    modal: true,
    autoShow: true,
    items: {
        xtype: 'form',
        bodyPadding: 10,
        defaults: {
            anchor: '100%'
        },
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'password',
                fieldLabel: 'Password',
                inputType: 'password',
                allowBlank: false
            }
        ],
        buttons: [
            {
                text: 'Login',
                formBind: true,
                disabled: true,
                handler: function(button) {
                    const form = button.up('form').getForm();
                    const values = form.getValues();
                    if (values.username === 'admin' && values.password === 'admin') {
                        button.up('window').close();
                        Ext.create('test-aitiguru.view.Main').show();
                    } else {
                        Ext.Msg.alert('Error', 'Invalid login or password');
                    }
                }
            }
        ]
    }
});

