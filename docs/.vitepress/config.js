export default {
    lang: 'zh-TW',
    title: 'JLDev',
    titleTemplate: 'JLDev',
    description: "Jacob Lin's personal developer notes.",
    appearance: "dark",
    lastUpdated: true,

    head: [
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ],

    themeConfig: {
        logo: '/JLDev-Logo@2x.png',
        nav: [
            { text: 'About', link: '/about' },
            { text: 'Frontend', link: '/frontend/' },
            { text: 'Backend', link: '/backend/' },
            { text: 'DevOps', link: '/devops/' },
            {
                text: 'Projects',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/jacoblindev' },
            { icon: 'twitter', link: 'https://twitter.com/Jacob20840321' },
            { icon: 'instagram', link: 'https://www.instagram.com/jacoblindev' }
        ],

        footer: {
            message: '~ Power by Vitepress ~',
            copyright: 'Copyright © 2022-present Jacob Lin'
        }
    }

}