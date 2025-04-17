import { paths } from "../../config/paths";

export interface MenuItem {
    label: string;
    url: string;
}

export const menu: MenuItem[] = [
    {
        label: 'Rent',
        url: paths.rent
    },
    {
        label: 'Buy',
        url: paths.buy
    },
    {
        label: 'Sell',
        url: paths.sell
    },
    {
        label: 'Manage Property',
        url: paths.manageProperty
    },
    {
        label: 'Resources',
        url: paths.resources
    }
]