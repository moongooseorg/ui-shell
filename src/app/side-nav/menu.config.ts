export interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const MENU: MenuSection[] = [
  {
    title: 'General',
    items: [
      { label: 'Home', icon: 'home', route: '/home' },
      { label: 'About', icon: 'info', route: '/about' },
    ],
  },
  {
    title: 'Tools',
    items: [{ label: 'Settings', icon: 'settings', route: '/settings' }],
  },
];
