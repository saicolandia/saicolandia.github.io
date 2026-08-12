<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/pages/10.home/default.md',
    'modified' => 1786572372,
    'size' => 1244,
    'data' => [
        'header' => [
            'title' => 'Saicolandia',
            'menu' => 'Home',
            'sitemap' => [
                'changefreq' => 'weekly',
                'priority' => 1.0
            ],
            'content' => [
                'items' => '@self.modules',
                'order' => [
                    'by' => 'default',
                    'dir' => 'asc'
                ]
            ],
            'banner' => [
                'url' => 'banner-saicolandia.png',
                'position' => '30% 42.5%',
                'image_source' => 'local'
            ]
        ],
        'frontmatter' => 'title: "Saicolandia"
menu: Home

# grav-plugin-sitemap overrides
sitemap:
  changefreq: weekly
  priority: !!float 1
content:
    items: \'@self.modules\'
    order:
        by: default
        dir: asc
        # custom:
        #     - _hook
        #     - _highlights
        #     - _callout
        #     - _features
        #     - _ddp	

banner:
    # leave url empty to disable banner
    url: \'banner-saicolandia.png\'
    position: \'30% 42.5%\'
    image_source: \'local\'
    # comment-out line below to disable headline
    # headline: \'Headline\'
    # follower:
      # comment-out line below to disable blurb
      # text: \'Oxygen for GRAV CMS\'
      # (values) opacity-dark | opacity-light | skew | small | bold | italic | uppercase | normal-case
      # class: \'opacity-light,italic\'
    # blurb:
      # comment-out line below to disable blurb
      # text: \'a theme by Kittyfish from Mars\'
      # (values) opacity-dark | opacity-light | skew | small | bold | italic | uppercase | normal-case
      # class: \'opacity-light,small\'
',
        'markdown' => '## Tercer año
#### - Desarrollos del Psicoanálisis. 
#### - Instrumentos de Exploración Psicológica I
#### - Instrumentos de Exploración Psicológica II
#### - Psciología de los Grupos

'
    ]
];
