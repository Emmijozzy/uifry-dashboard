import image from "../assets/images"

const { dashboard,accounts,wallet,analysis,mode,security,settings,profile } = image

 export const navItems = [
    {
        icon: dashboard,
        title: 'Dashboard',
        link: '/'
    },
    {
        icon: analysis,
        title: 'Analysis',
        link: '/analysis'
    },
    {
        icon: wallet,
        title: 'My Wallet',
        link: '/wallet'
    },
    {
        icon: accounts,
        title: 'Accounts',
        link: '/account'
    },
    {
        icon: settings,
        title: 'Settings',
        link: '/settings'
    },
]