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
        nav: nav(),

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

function nav() {
    return [
        { text: 'Frontend', link: '/frontend/' },
        { text: 'Backend', link: '/backend/' },
        { text: 'DevOps', link: '/devops/' },
        {
            text: 'Projects',
            items: [
                { text: 'FM Challenges', link: 'https://jacoblindev.github.io/vue-fm-challenges/' }
            ]
        }
    ]
}

function sidebarConfig() {
    return [
        {
            text: 'Config',
            items: [
                { text: 'Introduction', link: '/config/introduction' },
                { text: 'App Configs', link: '/config/app-configs' },
                { text: 'Theme Configs', link: '/config/theme-configs' },
                { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
            ]
        }
    ]
}