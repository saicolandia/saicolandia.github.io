<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/grav-2/user/pages/30.sidebars/10.sidebar-left/01._list-disc/links.md',
    'modified' => 1786572372,
    'size' => 596,
    'data' => [
        'header' => [
            'title' => 'list-disc',
            'taxonomy' => [
                'tag' => 'links'
            ],
            'links' => [
                'headline' => 'Quick Links',
                'byline' => [
                    'text' => 'Choose <i>Sidebar Left</i> for Quick Links and FAQs. On Mobile this section sits above page content.
'
                ],
                'type' => 'list-disc',
                'items' => [
                    0 => [
                        'text' => 'Sidebar Left',
                        'url' => '/sidebars/sidebar-left',
                        'description' => 'This description is optional.'
                    ],
                    1 => [
                        'text' => 'Sidebar Right',
                        'url' => '/sidebars/sidebar-right'
                    ],
                    2 => [
                        'text' => 'An entry without a link',
                        'description' => 'Just in case you need the sidebar for something else.'
                    ]
                ]
            ]
        ],
        'frontmatter' => 'title: list-disc

taxonomy:
  tag: links

links:
    headline: Quick Links
    byline:
      text: >
        Choose <i>Sidebar Left</i> for Quick Links and FAQs.
        On Mobile this section sits above page content.
    type: list-disc
    items:
      - text: Sidebar Left
        url: /sidebars/sidebar-left
        description: This description is optional.
      - text: Sidebar Right
        url: /sidebars/sidebar-right
        # description: Another descriptive text
      - text: An entry without a link
        description: Just in case you need the sidebar for something else.',
        'markdown' => ''
    ]
];
