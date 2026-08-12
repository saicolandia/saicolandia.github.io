<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/grav-2/user/plugins/email/email.yaml',
    'modified' => 1786572373,
    'size' => 221,
    'data' => [
        'enabled' => true,
        'from' => NULL,
        'to' => NULL,
        'mailer' => [
            'engine' => 'sendmail',
            'smtp' => [
                'server' => 'localhost',
                'port' => 25,
                'encryption' => 'none',
                'user' => NULL,
                'password' => NULL
            ],
            'sendmail' => [
                'bin' => '/usr/sbin/sendmail -bs'
            ]
        ],
        'content_type' => 'text/html',
        'debug' => false
    ]
];
