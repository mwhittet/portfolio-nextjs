import type { NavItems } from '../types';

export const FOOTER_NAV_ITEMS: NavItems = [
  { href: 'https://github.com/mwhittet/', label: 'Visit my Github profile' },
  {
    href: 'https://www.linkedin.com/in/mike-w-b8756168/',
    label: 'Visit my LinkedIn profile',
  },
];

export const HEADER_NAV_ITEMS: NavItems = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export const PORTFOLIO_ITEMS = [
  {
    hrefUrl: '/portfolio/barnes-code',
    imageUrl: '/images/portfolio/barnescode.jpg',
    name: 'Barnes Code',
  },
  {
    hrefUrl: '/portfolio/thoughts-conversations-and-to-do-lists',
    imageUrl: '/images/portfolio/thoughts.jpg',
    name: 'Thoughts, conversations and to do lists',
  },
  {
    hrefUrl: '/portfolio/which',
    imageUrl: '/images/portfolio/which.jpg',
    name: 'Which?',
  },
  {
    hrefUrl: '/portfolio/royal-opera-house',
    imageUrl: '/images/portfolio/roh.jpg',
    name: 'Royal Opera House',
  },
  {
    hrefUrl: '/portfolio/french-connection',
    imageUrl: '/images/portfolio/fc.jpg',
    name: 'French Connection',
  },
  {
    hrefUrl: '/portfolio/virgin-media',
    imageUrl: '/images/portfolio/virgin.jpg',
    name: 'Virgin Media',
  },
];
