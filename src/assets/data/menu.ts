export interface MenuItem {
    label: string;
    url: string;
}

export const menu: MenuItem[] = [
    {
        label: 'Rent',
        url: '/rent'
    },
    {
        label: 'Buy',
        url: '/buy'
    },
    {
        label: 'Sell',
        url: '/sell'
    },
    {
        label: 'Manage Property',
        url: 'manage-property'
    },
    {
        label: 'Resources',
        url: 'resources'
    }
]