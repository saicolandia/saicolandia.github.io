<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/env/localhost/config/system.yaml',
    'modified' => 1786572372,
    'size' => 380,
    'data' => [
        'assets' => [
            'collections' => [
                'jquery' => 'system://assets/jquery/jquery-3.x.min.js'
            ]
        ],
        'errors' => [
            'display' => 1,
            'log' => true
        ],
        'log' => [
            'handler' => 'file',
            'syslog' => [
                'facility' => 'local6',
                'tag' => 'grav'
            ]
        ],
        'debugger' => [
            'provider' => 'debugbar',
            'censored' => false,
            'shutdown' => [
                'close_connection' => true
            ],
            'twig' => true
        ],
        'cache' => [
            'enabled' => false
        ]
    ]
];
