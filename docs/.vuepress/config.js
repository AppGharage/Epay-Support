module.exports = {
    title: 'Epay Guide',
    description: 'The guide to using Epay',
    serviceWorker: true,
    themeConfig: {
        repo: 'AppGharage/Epay-support',
        repoLabel: 'Contribute!',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on Github!',
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Developers', link: '/developers/' },
            { text: 'Visit Epay', link: 'https://epaygh.com' }
        ]
    }
}