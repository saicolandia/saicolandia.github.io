<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/pages/20.sample/01._notices/notices.md',
    'modified' => 1786572372,
    'size' => 1005,
    'data' => [
        'header' => [
            'title' => 'Notices',
            'notices' => [
                'headline' => 'Choose your Adventure',
                'byline' => [
                    'text' => 'Cardboard box for homemade spaceship included
',
                    'class' => 'uppercase'
                ],
                'items' => [
                    0 => [
                        'title' => 'A tale about a kitten',
                        'text' => '... a kitten with an unusual tail. Also, a spacesuit.
',
                        'url' => '#',
                        'icon' => 'fa-github-alt',
                        'iconColor' => 'color-primary'
                    ],
                    1 => [
                        'title' => 'an unlikely Friendship',
                        'text' => 'Do mechanical fish ride electrical bikes?
',
                        'url' => '#',
                        'icon' => 'fa-heart',
                        'iconColor' => 'color-primary'
                    ],
                    2 => [
                        'title' => 'and Rocketry',
                        'text' => 'To space and beyond in 3 simple steps!
',
                        'url' => '#',
                        'icon' => 'fa-rocket',
                        'iconColor' => 'color-primary'
                    ]
                ]
            ]
        ],
        'frontmatter' => 'title: Notices


# rendered in a 3-column grid, confiurable by SCSS
notices:
    headline: Choose your Adventure
    byline:
        text: >
          Cardboard box for homemade spaceship included
        # (values) normal-case | uppercase | normal-case | bold | small | align-left-md
        class: uppercase
    items:
        - title: A tale about a kitten
          text: >
            ... a kitten with an unusual tail. Also, a spacesuit.
          url: \'#\'
          icon: fa-github-alt
          # (values) color-primary | color-secondary | color-success | color-warning | color-danger
          iconColor: color-primary
        - title: an unlikely Friendship
          text: >
            Do mechanical fish ride electrical bikes?
          url: \'#\'
          icon: fa-heart
          iconColor: color-primary
        - title: and Rocketry
          text: >
            To space and beyond in 3 simple steps!
          url: \'#\'
          icon: fa-rocket
          iconColor: color-primary',
        'markdown' => ''
    ]
];
