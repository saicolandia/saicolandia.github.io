<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/system/config/security.yaml',
    'modified' => 1786572335,
    'size' => 19139,
    'data' => [
        'xss_whitelist' => [
            0 => 'admin.super'
        ],
        'xss_enabled' => [
            'on_events' => true,
            'invalid_protocols' => true,
            'moz_binding' => true,
            'html_inline_styles' => true,
            'dangerous_tags' => true
        ],
        'xss_invalid_protocols' => [
            0 => 'javascript',
            1 => 'livescript',
            2 => 'vbscript',
            3 => 'mocha',
            4 => 'feed',
            5 => 'data'
        ],
        'xss_dangerous_tags' => [
            0 => 'applet',
            1 => 'meta',
            2 => 'xml',
            3 => 'blink',
            4 => 'link',
            5 => 'style',
            6 => 'script',
            7 => 'embed',
            8 => 'object',
            9 => 'iframe',
            10 => 'frame',
            11 => 'frameset',
            12 => 'ilayer',
            13 => 'layer',
            14 => 'bgsound',
            15 => 'title',
            16 => 'base',
            17 => 'isindex',
            18 => 'svg',
            19 => 'math',
            20 => 'option',
            21 => 'select'
        ],
        'uploads_dangerous_extensions' => [
            0 => 'php',
            1 => 'php2',
            2 => 'php3',
            3 => 'php4',
            4 => 'php5',
            5 => 'phar',
            6 => 'phtml',
            7 => 'html',
            8 => 'htm',
            9 => 'shtml',
            10 => 'shtm',
            11 => 'js',
            12 => 'exe',
            13 => 'md',
            14 => 'yaml',
            15 => 'yml',
            16 => 'json',
            17 => 'twig',
            18 => 'ini',
            19 => 'xhtml',
            20 => 'xht',
            21 => 'svgz',
            22 => 'php7',
            23 => 'php8',
            24 => 'pht',
            25 => 'phtm',
            26 => 'phps'
        ],
        'sanitize_svg' => true,
        'twig_content' => [
            'process_enabled' => false,
            'editor_enabled' => false,
            'config_access' => false
        ],
        'twig_sandbox' => [
            'enabled' => true,
            'logging' => true,
            'admin_hint' => true,
            'config_denied_paths' => [
                0 => 'plugins',
                1 => 'streams',
                2 => 'security',
                3 => 'backups',
                4 => 'scheduler',
                5 => 'system.cache.redis.password'
            ],
            'allowed_tags' => [
                0 => 'apply',
                1 => 'autoescape',
                2 => 'block',
                3 => 'deprecated',
                4 => 'do',
                5 => 'embed',
                6 => 'extends',
                7 => 'for',
                8 => 'from',
                9 => 'if',
                10 => 'import',
                11 => 'include',
                12 => 'macro',
                13 => 'sandbox',
                14 => 'set',
                15 => 'spaceless',
                16 => 'types',
                17 => 'use',
                18 => 'verbatim',
                19 => 'with'
            ],
            'allowed_filters' => [
                0 => 'abs',
                1 => 'batch',
                2 => 'capitalize',
                3 => 'column',
                4 => 'convert_encoding',
                5 => 'country_name',
                6 => 'currency_name',
                7 => 'currency_symbol',
                8 => 'data_uri',
                9 => 'date',
                10 => 'date_modify',
                11 => 'default',
                12 => 'e',
                13 => 'escape',
                14 => 'filter',
                15 => 'first',
                16 => 'format',
                17 => 'format_currency',
                18 => 'format_date',
                19 => 'format_datetime',
                20 => 'format_number',
                21 => 'format_time',
                22 => 'html_to_markdown',
                23 => 'inline_css',
                24 => 'inky_to_html',
                25 => 'join',
                26 => 'json_encode',
                27 => 'keys',
                28 => 'language_name',
                29 => 'last',
                30 => 'length',
                31 => 'locale_name',
                32 => 'lower',
                33 => 'map',
                34 => 'markdown_to_html',
                35 => 'merge',
                36 => 'nl2br',
                37 => 'number_format',
                38 => 'reduce',
                39 => 'replace',
                40 => 'reverse',
                41 => 'round',
                42 => 'slice',
                43 => 'slug',
                44 => 'sort',
                45 => 'split',
                46 => 'striptags',
                47 => 'timezone_name',
                48 => 'title',
                49 => 'trim',
                50 => 'u',
                51 => 'upper',
                52 => 'url_encode',
                53 => 'absolute_url',
                54 => 'array',
                55 => 'array_diff',
                56 => 'array_unique',
                57 => 'base32_decode',
                58 => 'base32_encode',
                59 => 'base64_decode',
                60 => 'base64_encode',
                61 => 'basename',
                62 => 'bool',
                63 => 'chunk_split',
                64 => 'contains',
                65 => 'count',
                66 => 'defined',
                67 => 'dirname',
                68 => 'ends_with',
                69 => 'fieldName',
                70 => 'float',
                71 => 'get_type',
                72 => 'int',
                73 => 'json_decode',
                74 => 'ksort',
                75 => 'ltrim',
                76 => 'markdown',
                77 => 'md5',
                78 => 'modulus',
                79 => 'nicecron',
                80 => 'nicefilesize',
                81 => 'nicenumber',
                82 => 'nicetime',
                83 => 'of_type',
                84 => 'pad',
                85 => 'parent_field',
                86 => 'print_r',
                87 => 'randomize',
                88 => 'regex_replace',
                89 => 'replace_last',
                90 => 'rtrim',
                91 => 'safe_email',
                92 => 'safe_truncate',
                93 => 'safe_truncate_html',
                94 => 'sort_by_key',
                95 => 'starts_with',
                96 => 'string',
                97 => 't',
                98 => 'ta',
                99 => 'tl',
                100 => 'truncate',
                101 => 'truncate_html',
                102 => 'wordcount',
                103 => 'yaml',
                104 => 'yaml_decode',
                105 => 'yaml_encode'
            ],
            'allowed_functions' => [
                0 => 'attribute',
                1 => 'block',
                2 => 'cycle',
                3 => 'date',
                4 => 'max',
                5 => 'min',
                6 => 'parent',
                7 => 'random',
                8 => 'range',
                9 => 'array',
                10 => 'array_diff',
                11 => 'array_intersect',
                12 => 'array_key_exists',
                13 => 'array_key_value',
                14 => 'array_unique',
                15 => 'authorize',
                16 => 'body_class',
                17 => 'count',
                18 => 'cron',
                19 => 'debug',
                20 => 'dump',
                21 => 'get_cookie',
                22 => 'get_type',
                23 => 'gist',
                24 => 'header_var',
                25 => 'is_array',
                26 => 'is_countable',
                27 => 'is_iterable',
                28 => 'is_null',
                29 => 'is_numeric',
                30 => 'is_object',
                31 => 'is_string',
                32 => 'isajaxrequest',
                33 => 'json_decode',
                34 => 'md5',
                35 => 'media_directory',
                36 => 'nicefilesize',
                37 => 'nicenumber',
                38 => 'nicetime',
                39 => 'of_type',
                40 => 'random_string',
                41 => 'regex_filter',
                42 => 'regex_match',
                43 => 'regex_replace',
                44 => 'regex_split',
                45 => 'repeat',
                46 => 'string',
                47 => 't',
                48 => 'ta',
                49 => 'theme_var',
                50 => 'tl',
                51 => 'unique_id',
                52 => 'url',
                53 => 'vardump',
                54 => 'xss'
            ],
            'allowed_methods' => [
                0 => [
                    'class' => 'Grav\\Common\\Grav',
                    'methods' => 'offsetexists, getversion, theme'
                ],
                1 => [
                    'class' => 'Grav\\Common\\Config\\Config',
                    'methods' => 'get, value, default, offsetget, offsetexists'
                ],
                2 => [
                    'class' => 'Grav\\Common\\Twig\\Sandbox\\SandboxConfig',
                    'methods' => 'get, toarray, value, offsetget, offsetexists'
                ],
                3 => [
                    'class' => 'Grav\\Common\\Page\\Interfaces\\PageInterface',
                    'methods' => 'content, header, title, menu, slug, route, rawroute, url, path, permalink, template, templateformat, filepath, date, dateformat, modified, media, parent, children, collection, find, findmedia, value, summary, taxonomy, visible, published, publishdate, unpublishdate, routable, language, modular, modulartwig, ismodule, ispage, isfirst, islast, adjacentsibling, prevsibling, nextsibling, metadata, id, order, breadcrumbs, home, tostring, __tostring'
                ],
                4 => [
                    'class' => 'Grav\\Common\\Page\\Pages',
                    'methods' => 'root, base, dispatch, home, all, children, instances, routes, sort'
                ],
                5 => [
                    'class' => 'Grav\\Common\\Uri',
                    'methods' => 'path, url, params, param, query, host, port, scheme, route, base, extension, method, referrer, ip, addr, toarray, __tostring'
                ],
                6 => [
                    'class' => 'Grav\\Common\\Page\\Media',
                    'methods' => 'images, videos, audios, files, all, get, offsetget, offsetexists, __tostring'
                ],
                7 => [
                    'class' => 'Grav\\Common\\Media\\Interfaces\\MediaCollectionInterface',
                    'methods' => 'images, videos, audios, files, all, get, offsetget, offsetexists, __tostring'
                ],
                8 => [
                    'class' => 'Grav\\Common\\Page\\Medium\\Medium',
                    'methods' => 'url, html, filepath, filename, metadata, srcset, parsedownelement, __tostring, @media_actions'
                ],
                9 => [
                    'class' => 'Grav\\Common\\Media\\Interfaces\\MediaLinkInterface',
                    'methods' => 'html, url, __tostring, parsedownelement, srcset, @media_actions'
                ],
                10 => [
                    'class' => 'Grav\\Common\\User\\Interfaces\\UserInterface',
                    'methods' => 'authorize, authorized, authenticated, username, fullname, email, language, offsetget, offsetexists'
                ],
                11 => [
                    'class' => 'Grav\\Common\\Taxonomy',
                    'methods' => 'taxonomy'
                ],
                12 => [
                    'class' => 'Grav\\Common\\Language\\Language',
                    'methods' => 'getactive, getdefault, getlanguages, getlanguage, enabled'
                ],
                13 => [
                    'class' => 'Grav\\Common\\Assets',
                    'methods' => '__tostring, addcss, addjs'
                ],
                14 => [
                    'class' => 'stdClass',
                    'methods' => '*'
                ],
                15 => [
                    'class' => 'Grav\\Common\\Data\\Data',
                    'methods' => 'get, value, items, offsetget, offsetexists, __tostring'
                ]
            ],
            'allowed_properties' => [
                0 => [
                    'class' => 'Grav\\Common\\Page\\Interfaces\\PageInterface',
                    'methods' => 'header, media, taxonomy'
                ],
                1 => [
                    'class' => 'Grav\\Common\\Grav',
                    'methods' => 'theme'
                ],
                2 => [
                    'class' => 'Grav\\Common\\Media\\Interfaces\\MediaCollectionInterface',
                    'methods' => '*'
                ],
                3 => [
                    'class' => 'Grav\\Common\\Page\\Media',
                    'methods' => '*'
                ],
                4 => [
                    'class' => 'Grav\\Common\\Page\\Medium\\Medium',
                    'methods' => '*'
                ],
                5 => [
                    'class' => 'stdClass',
                    'methods' => '*'
                ]
            ]
        ],
        'read_file' => [
            'allowed_streams' => [
                0 => 'theme',
                1 => 'themes',
                2 => 'page',
                3 => 'user-data'
            ],
            'allowed_extensions' => [
                0 => 'md',
                1 => 'markdown',
                2 => 'txt',
                3 => 'html',
                4 => 'htm',
                5 => 'css',
                6 => 'json',
                7 => 'csv',
                8 => 'xml',
                9 => 'svg'
            ],
            'max_size' => 1048576
        ]
    ]
];
