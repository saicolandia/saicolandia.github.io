<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/plugins/flex-objects/flex-objects.yaml',
    'modified' => 1786572383,
    'size' => 1132,
    'data' => [
        'enabled' => true,
        'built_in_css' => true,
        'media_proxy' => [
            'enabled' => false,
            'base' => '/flex-media',
            'authorize' => false,
            'cache_control' => 'public, max-age=604800'
        ],
        'security' => [
            'restrict_page_frontmatter' => true
        ],
        'admin_list' => [
            'per_page' => 15,
            'order' => [
                'by' => 'updated_timestamp',
                'dir' => 'desc'
            ]
        ],
        'directories' => [
            0 => 'blueprints://flex-objects/pages.yaml',
            1 => 'blueprints://flex-objects/user-accounts.yaml',
            2 => 'blueprints://flex-objects/user-groups.yaml'
        ]
    ]
];
