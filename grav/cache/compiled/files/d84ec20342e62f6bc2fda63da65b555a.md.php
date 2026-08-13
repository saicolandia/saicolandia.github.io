<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/pages/14.blog/blog.md',
    'modified' => 1786574337,
    'size' => 275,
    'data' => [
        'header' => [
            'title' => 'Blog',
            'template' => 'sidebar',
            'sidebar' => [
                'position' => 'left'
            ],
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
template: sidebar    # <--- ESTO ES CLAVE
sidebar:
  position: left

content:
    items: \'@self.children\'
    order:
        by: date
        dir: desc
feed:
    description: \'Mi feed de noticias personal\'
    limit: 20',
        'markdown' => '# Mis Publicaciones

Billy Freud

'
    ]
];
