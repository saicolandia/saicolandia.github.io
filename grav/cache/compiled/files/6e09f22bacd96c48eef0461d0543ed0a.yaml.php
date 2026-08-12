<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/config/plugins/admin.yaml',
    'modified' => 1786572372,
    'size' => 712,
    'data' => [
        'enabled' => true,
        'route' => '/admin',
        'cache_enabled' => false,
        'twofa_enabled' => false,
        'dashboard' => [
            'days_of_stats' => 365
        ],
        'widgets_display' => [
            'dashboard-maintenance' => 'false',
            'dashboard-statistics' => 'false',
            'dashboard-notifications' => 'false',
            'dashboard-feed' => 'false',
            'dashboard-pages' => 'true'
        ],
        'pages' => [
            'show_parents' => 'both',
            'show_modular' => true,
            'parents_levels' => NULL
        ],
        'session' => [
            'timeout' => 3600
        ],
        'frontend_preview_target' => 'inline',
        'show_github_msg' => false,
        'admin_icons' => 'line-awesome',
        'enable_auto_updates_check' => false,
        'notifications' => [
            'feed' => false,
            'dashboard' => false,
            'plugins' => true,
            'themes' => true
        ],
        'popularity' => [
            'enabled' => false,
            'ignore' => [
                0 => '/test*',
                1 => '/modular',
                2 => '/'
            ]
        ],
        'show_beta_msg' => NULL,
        'pagemedia' => [
            'resize_quality' => 0.99
        ]
    ]
];
