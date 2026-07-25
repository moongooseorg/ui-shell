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
      { label: 'Markets', icon: 'trending_up', route: '/markets' },
      { label: 'MP3 Tagger', icon: 'music_note', route: '/mp3-tagger' },
    ],
  },
];
