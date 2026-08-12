<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => 'plugin://admin2/permissions.yaml',
    'modified' => 1786572393,
    'size' => 179,
    'data' => [
        'actions' => [
            'site.login' => [
                'type' => 'access',
                'label' => 'Login to Site'
            ],
            'admin.login' => [
                'type' => 'access',
                'label' => 'Login to Admin'
            ],
            'admin.super' => [
                'type' => 'access',
                'label' => 'Super User'
            ]
        ]
    ]
];
