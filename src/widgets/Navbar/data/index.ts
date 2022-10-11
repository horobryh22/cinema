import { IMenu } from '../types';

export const MENU: IMenu[] = [
    {
        title: 'Menu',
        items: [
            { title: 'Home', icon: 'MdHome', link: '/' },
            { title: 'Discovery', icon: 'MdExplore', link: '/genres' },
            { title: 'Fresh movies', icon: 'MdExplore', link: '/fresh' },
            { title: 'Trending now', icon: 'MdLocalFireDepartment', link: '/trending' },
        ],
    },
];
