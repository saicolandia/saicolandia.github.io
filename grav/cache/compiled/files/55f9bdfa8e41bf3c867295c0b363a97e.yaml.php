<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledYamlFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/themes/oxygen/blueprints/default.yaml',
    'modified' => 1786572373,
    'size' => 6781,
    'data' => [
        'title' => 'Default',
        'extends@' => [
            'type' => 'default',
            'context' => 'blueprints://pages'
        ],
        'form' => [
            'fields' => [
                'tabs' => [
                    'type' => 'tabs',
                    'active' => 1,
                    'fields' => [
                        'content' => [
                            'fields' => [
                                'header.content.items' => [
                                    'type' => 'hidden',
                                    'default' => '@self.modules'
                                ],
                                'spacer' => [
                                    'type' => 'spacer',
                                    'underline' => true,
                                    'ordering@' => 'PageMedia'
                                ],
                                'header.banner' => [
                                    'ordering@' => 'spacer',
                                    'type' => 'fieldset',
                                    'title' => 'Banner',
                                    'info' => ' click to expand / collapse',
                                    'icon' => 'camera',
                                    'collapsed' => false,
                                    'collapsible' => true,
                                    'fields' => [
                                        '.image_source' => [
                                            'type' => 'toggle',
                                            'label' => 'Image Source',
                                            'highlight' => 1,
                                            'default' => 'local',
                                            'options' => [
                                                'local' => 'Local Image',
                                                'remote' => 'Remote URL'
                                            ],
                                            'toggleable' => true
                                        ],
                                        '.url' => [
                                            'type' => 'mediapicker',
                                            'label' => 'Image',
                                            'help' => 'Leave blank for none.',
                                            'sublabel' => '<small>Recommended size: 1500x960px. Leave blank for none.</small>
',
                                            'preview_images' => true,
                                            'accept' => [
                                                0 => 'image/*'
                                            ]
                                        ],
                                        '.remote_url' => [
                                            'type' => 'text',
                                            'label' => 'Remote Image URL',
                                            'help' => 'Enter the full URL of the image',
                                            'validate' => [
                                                'type' => 'url'
                                            ]
                                        ],
                                        '.position' => [
                                            'type' => 'text',
                                            'label' => 'Position',
                                            'help' => 'CSS values for background-position',
                                            'default' => 'center center'
                                        ]
                                    ]
                                ],
                                'header.pageOptions' => [
                                    'ordering@' => 'banner',
                                    'type' => 'fieldset',
                                    'title' => 'Page Options',
                                    'info' => ' click to expand / collapse',
                                    'icon' => 'cog',
                                    'collapsed' => false,
                                    'collapsible' => true,
                                    'fields' => [
                                        '.noIndex' => [
                                            'type' => 'toggle',
                                            'label' => 'Allow this specific page to be indexed by search engines',
                                            'help' => '(Default: enabled) This page may be indexed by search engines. Please make sure that the the entire site can be indexed via THEME OPTIONS.',
                                            'default' => 0,
                                            'highlight' => 0,
                                            'options' => [
                                                1 => 'PLUGIN_ADMIN.DISABLED',
                                                0 => 'PLUGIN_ADMIN.ENABLED'
                                            ],
                                            'validate' => [
                                                'type' => 'bool'
                                            ]
                                        ]
                                    ]
                                ],
                                'sectionModules' => [
                                    'type' => 'section',
                                    'title' => 'Modules Available',
                                    'text' => 'Additional content can be populated by modules.',
                                    'underline' => true,
                                    'ordering@' => 99
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]
];
