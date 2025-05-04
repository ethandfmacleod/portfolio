export interface NavItemType {
    title: string
    href: string
    description: string
}

// Navigation Menu dropdown items
export const otherNavItems: NavItemType[] = [
    {
        title: 'Honors Project Work',
        href: '/honors',
        description: 'A collection of key documents from my honors project.',
    },
    {
        title: 'Homelab',
        href: '/other/homelab',
        description:
            'A quick overview of my self-hosted services and home server architecture.',
    },
]

export const projectNavItems: NavItemType[] = [
    {
        title: 'Microgrid Simulator',
        href: '/projects/microgrid-simulator',
        description:
            'An interactive digital twin simulating consumer-grade microgrids.',
    },
    {
        title: 'Better Reads',
        href: '/projects/better-reads',
        description: 'A cloud-powered social platform for book enthusiasts.',
    },
    {
        title: 'Ahuora Adaptive Digital Twin Platform',
        href: '/projects/ahuora',
        description:
            'An MBIE-funded process simulator for reducing carbon emissions.',
    },
]
