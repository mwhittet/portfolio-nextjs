import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { Links, PortfolioCards, SocialLinks } from '../types';

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: 'https://github.com/mwhittet/',
    icon: FaGithub,
    label: 'Visit my Github profile',
  },
  {
    href: 'https://www.linkedin.com/in/mike-w-b8756168/',
    icon: FaLinkedin,
    label: 'Visit my LinkedIn profile',
  },
];

export const HEADER_LINKS: Links = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export const PORTFOLIO_CARDS: PortfolioCards = [
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
