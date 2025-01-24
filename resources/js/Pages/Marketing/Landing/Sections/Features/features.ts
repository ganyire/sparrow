import { utilityColors } from '@/lib/utils';
import {
    BsAward,
    BsBrowserChrome,
    BsCodeSquare,
    BsDisplay,
    BsEye,
    BsFeather,
    BsPatchCheck,
    BsPhone,
    BsShieldCheck,
    BsSunrise,
} from 'react-icons/bs';

export const mainFeatures = [
    {
        id: '1',
        name: 'Modisit',
        title: 'Voluptatem dignissimos provident',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
        ],
        imgSrc: '/images/features-illustration-1.webp',
    },
    {
        id: '2',
        name: 'Praesenti',
        title: 'Neque exercitationem debitist',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        list: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            ' Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.',
        ],
        imgSrc: '/images/features-illustration-2.webp',
    },
    {
        id: '3',
        name: 'Explica',
        title: 'Voluptatibus commodi accusamu',
        description: '',
        list: [
            'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit.',
            ' Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ],
        imgSrc: '/images/features-illustration-3.webp',
    },
];

export const minorFeatures = [
    {
        id: 1,
        title: 'Corporis voluptates',
        description:
            'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
        bgColor: utilityColors.Tertiary,
        icon: BsAward,
        iconColor: '#edb86e',
    },

    {
        id: 2,
        title: 'Explicabo consectetur',
        description:
            'Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore',
        bgColor: utilityColors.PrimaryLight,
        icon: BsPatchCheck,
        iconColor: utilityColors.PrimaryDark,
    },

    {
        id: 3,
        title: 'Ullamco laboris',
        description:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
        bgColor: '#d5f1e4',
        icon: BsSunrise,
        iconColor: '#48c88a',
    },

    {
        id: 4,
        title: 'Labore consequatur',
        description:
            'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
        bgColor: '#fdeded',
        icon: BsShieldCheck,
        iconColor: '#f28484',
    },
];

export const mobileLeftFeatures = [
    {
        id: 1,
        title: 'Use On Any Device',
        description:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.',
        icon: BsDisplay,
    },
    {
        id: 2,
        title: 'Feather Icons',
        description:
            'Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.',
        icon: BsFeather,
    },
    {
        id: 3,
        title: 'Retina Ready',
        description:
            'Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.',
        icon: BsEye,
    },
];

export const mobileRightFeatures = [
    {
        id: 1,
        title: 'W3c Valid Code',
        description:
            'Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.',
        icon: BsCodeSquare,
    },
    {
        id: 2,
        title: 'Fully Responsive',
        description:
            'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.',
        icon: BsPhone,
    },
    {
        id: 3,
        title: 'Browser Compatibility',
        description:
            'Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.',
        icon: BsBrowserChrome,
    },
];
