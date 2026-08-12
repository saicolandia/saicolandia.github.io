<?php
return [
    '@class' => 'Grav\\Common\\File\\CompiledMarkdownFile',
    'filename' => '/home/kikodelmar/saicolandia/github/saicolandia.github.io/grav/user/pages/30.sidebars/10.sidebar-left/sidebar.md',
    'modified' => 1786572372,
    'size' => 1675,
    'data' => [
        'header' => [
            'title' => 'Sidebar Left',
            'sidebar' => [
                'position' => 'left'
            ],
            'content' => [
                'items' => '@self.modules',
                'order' => [
                    'by' => 'default',
                    'dir' => 'asc'
                ]
            ]
        ],
        'frontmatter' => 'title: \'Sidebar Left\'

sidebar:
  position: left

content:
    items: \'@self.modules\'
    order:
        by: default
        dir: asc',
        'markdown' => 'This is a demo of a subpage within a menu dropdown.

This subpages shows the `sidebar` template, with the sidebar positioned `left`.
Displayed within the sidebar is the `links` module.

#### Lorem Ipsum

Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus ac magna. Pellentesque habitant morbi.

Tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pede. Donec pulvinar ullamcorper metus. In eu odio at lectus pulvinar mollis. Vestibulum sem magna, elementum ut, vestibulum eu, facilisis quis, arcu. Mauris a dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit. Phasellus pellentesque, ante nec iaculis lobortis lorem mauris quis nunc. 

Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed blandit. Phasellus pellentesque, ante nec iaculis lobortis lorem mauris quis nunc. 

Vivamus consequat lorem at nisl. Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus ac magna. Pellentesque habitant morbi.'
    ]
];
