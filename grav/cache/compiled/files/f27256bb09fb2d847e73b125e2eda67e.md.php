<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/grav-2/user/pages/footer/footer.md',
    'modified' => 1786572372,
    'size' => 307,
    'data' => [
        'header' => [
            'title' => 'Footer',
            'routable' => false,
            'visible' => false,
            'content' => [
                'items' => '@self.modules'
            ],
            'expires' => 0,
            'pageOptions' => [
                'noIndex' => true
            ],
            'sitemap' => [
                'ignore' => true
            ],
            'taxonomy' => [
                'tag' => 'id-footer'
            ]
        ],
        'frontmatter' => 'title: Footer
routable: false
visible: false
content:
    items: \'@self.modules\'
expires: 0
pageOptions:
    noIndex: true
sitemap:
   ignore: true

# do not change taxonomy definition. id tag is an identifier
taxonomy:
   tag: \'id-footer\'',
        'markdown' => '[Kittyfish from Mars](https://github.com/kittyfishfrommars)'
    ]
];
