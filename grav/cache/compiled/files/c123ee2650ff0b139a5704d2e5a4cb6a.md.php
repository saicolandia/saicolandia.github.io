<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/grav-2/user/pages/14.blog/blog.md',
    'modified' => 1786572372,
    'size' => 204,
    'data' => [
        'header' => [
            'title' => 'Blog',
            'content' => [
                'items' => '@self.children',
                'order' => [
                    'by' => 'date',
                    'dir' => 'desc'
                ]
            ],
            'feed' => [
                'description' => 'Mi feed de noticias personal',
                'limit' => 20
            ]
        ],
        'frontmatter' => 'title: Blog
content:
    items: \'@self.children\'
    order:
        by: date
        dir: desc
feed:
    description: \'Mi feed de noticias personal\'
    limit: 20',
        'markdown' => '# Mis Publicaciones

Billy Freud'
    ]
];
