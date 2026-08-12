<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/plugins/api/api.yaml',
    'modified' => 1786572395,
    'size' => 4979,
    'data' => [
        'enabled' => true,
        'route' => '/api',
        'version_prefix' => 'v1',
        'auth' => [
            'api_keys_enabled' => true,
            'jwt_enabled' => true,
            'jwt_algorithm' => 'HS256',
            'jwt_expiry' => 3600,
            'jwt_refresh_expiry' => 604800,
            'session_enabled' => true
        ],
        'cors' => [
            'enabled' => true,
            'origins' => [
                
            ],
            'methods' => [
                0 => 'GET',
                1 => 'POST',
                2 => 'PATCH',
                3 => 'DELETE',
                4 => 'OPTIONS'
            ],
            'headers' => [
                0 => 'Content-Type',
                1 => 'Authorization',
                2 => 'X-API-Key',
                3 => 'X-API-Token',
                4 => 'X-Grav-Environment',
                5 => 'If-Match',
                6 => 'If-None-Match'
            ],
            'expose_headers' => [
                0 => 'ETag',
                1 => 'X-Invalidates',
                2 => 'X-RateLimit-Limit',
                3 => 'X-RateLimit-Remaining',
                4 => 'X-RateLimit-Reset'
            ],
            'max_age' => 86400,
            'credentials' => false
        ],
        'rate_limit' => [
            'enabled' => true,
            'requests' => 120,
            'window' => 60,
            'storage' => 'file'
        ],
        'demo' => [
            'writable' => [
                0 => 'api.pages.write',
                1 => 'api.media.write'
            ],
            'reset_interval' => 30,
            'reset_on_request' => true,
            'reset_on_schedule' => true,
            'keep_safety_snapshots' => 5
        ],
        'allow_draft_preview' => true,
        'preview_token_ttl' => 300,
        'flex_backend' => [
            'pages' => true,
            'accounts' => true
        ],
        'media_metadata' => [
            'fields' => [
                0 => [
                    'key' => 'alt',
                    'label' => 'Alt Text',
                    'type' => 'text'
                ],
                1 => [
                    'key' => 'title',
                    'label' => 'Title',
                    'type' => 'text'
                ],
                2 => [
                    'key' => 'caption',
                    'label' => 'Caption',
                    'type' => 'textarea'
                ],
                3 => [
                    'key' => 'description',
                    'label' => 'Description',
                    'type' => 'textarea'
                ],
                4 => [
                    'key' => 'tags',
                    'label' => 'Tags',
                    'type' => 'tags'
                ]
            ],
            'max_length' => 2000
        ],
        'pagination' => [
            'default_per_page' => 20,
            'max_per_page' => 1000
        ],
        'invitations' => [
            'expiration' => 604800
        ],
        'popularity' => [
            'enabled' => true,
            'exclude_admin' => true,
            'exclude_ips' => [
                
            ],
            'history' => [
                'daily' => 30,
                'monthly' => 12,
                'visitors' => 20
            ],
            'ignore' => [
                0 => '/test*',
                1 => '/modular'
            ]
        ]
    ]
];
