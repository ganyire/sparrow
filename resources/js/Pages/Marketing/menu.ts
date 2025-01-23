export const enum sectionIds {
    home = 'home',
    about = 'about',
    features = 'features',
    services = 'services',
    pricing = 'pricing',
    dropdown = 'dropdown',
    contact = 'contact',
}

// create a pipe separated string of all the section ids
export const menuItems: Array<{
    id: keyof typeof sectionIds;
    label: string;
}> = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'dropdown', label: 'Dropdown' },
    { id: 'contact', label: 'Contact' },
];
