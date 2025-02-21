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
    portfolioSlug: 'barnes-code',
  },
  {
    hrefUrl: '/portfolio/thoughts-conversations-and-to-do-lists',
    imageUrl: '/images/portfolio/thoughts.jpg',
    name: 'Thoughts, conversations and to do lists',
    portfolioSlug: 'thoughts-conversations-and-to-do-lists',
  },
  {
    hrefUrl: '/portfolio/which',
    imageUrl: '/images/portfolio/which.jpg',
    name: 'Which?',
    portfolioSlug: 'which',
  },
  {
    hrefUrl: '/portfolio/royal-opera-house',
    imageUrl: '/images/portfolio/roh.jpg',
    name: 'Royal Opera House',
    portfolioSlug: 'royal-opera-house',
  },
  {
    hrefUrl: '/portfolio/french-connection',
    imageUrl: '/images/portfolio/fc.jpg',
    name: 'French Connection',
    portfolioSlug: 'french-connection',
  },
  {
    hrefUrl: '/portfolio/virgin-media',
    imageUrl: '/images/portfolio/virgin.jpg',
    name: 'Virgin Media',
    portfolioSlug: 'virgin-media',
  },
];

export const PORTFOLIO_ITEMS = [
  {
    title: 'Barnes Code',
    slug: 'barnes-code',
    intro: [
      "A good friend of mine asked for some help with his company website as he couldn't find the time to dedicate to it. A design was provided but I was given free reign with the initial setup so I decided to use Next.js with SASS for the styling and React Testing Library for the unit testing (not much was needed, this was more of a nice to have so that it could be built upon) and Netlify is used for deploying. It's a great little website with some subtle animations I created using framer-motion, it has a very high accessability & speed score and it's visually stunning on all device sizes.",
    ],
    achievements: ['First live website built using Next.js'],
    skills: [
      'Next.js',
      'React Testing library',
      'SASS',
      'Framer-motion',
      'Netlify',
    ],
    projects: [
      {
        name: 'Barnes Code | Mission',
        url: '/',
        image: '/images/projects/barnescode-1.jpg',
      },
      {
        name: 'Barnes Code | Engineering',
        url: '/',
        image: '/images/projects/barnescode-2.jpg',
      },
    ],
  },
  {
    title: 'Thoughts, conversations and to do lists',
    slug: 'thoughts-conversations-and-to-do-lists',
    intro: [
      "A small side project for a podcast series and album launch by Fiona Ross, it's built using Gatsby which also uses the Netlify CMS to easily add new episodes to it. It was built against a very tight deadline as the album launch had a set date but everything was ready a week before with the client very happy with the end result.",
    ],
    achievements: [],
    skills: ['Gatsby', 'GraphQL', 'CSS 3', 'Netlify CMS'],
    projects: [
      {
        name: 'Thoughts, conversations and to do lists | Episodes',
        url: 'https://thoughtsconversationsandtodolists.com/episodes/',
        image: '/images/projects/thoughts-episodes.jpg',
      },
      {
        name: 'Thoughts, conversations and to do lists | About',
        url: 'https://thoughtsconversationsandtodolists.com/about/',
        image: '/images/projects/thoughts-about.jpg',
      },
    ],
  },
  {
    title: 'Which?',
    slug: 'which',
    intro: [
      "When I first joined Which, I was in a team looking after the CMS system called Glide and I also extensively worked on a design system (using Storybook) to create a collection of flexible and reusable components that could be used across all the different areas of the business. The engineering team slowly adopted the squad model and I've been lucky to work in four different squads, acquisition, content experience & discovery, content experience (the previous squad was split into two as it was very large) and the Which? Core squad as a Product Engineer.",
      "Within the acquisition squad, I was the sole developer, we investigated how we could gain & retain users and introduced improvements to the sign-up journey. Within the Core squad (we absorbed quite a few areas from the previous two squads I was in), we look after over thirty different domains such as Glide, the article templates, news, global navigation, saved/favorites (this is as new domain that we have been working on) and static tools. We also keep a keen eye on issues and performance monitoring by using several tools such as Airbrake, Calibre & Lighthouse to name a few. At Which I'm the go to person for static tools, I believe this is quite a achievement as the math required to give the correct calculations can be quite complex especially with the finance and mortgage tools.",
    ],
    achievements: [
      'Decreased average page size by 52% via code-splitting, using responsive imagery, removing redundant code, updating/removing npm packages etc',
      'Provided all the responsive styling and tracking for the new global navigation menu (also decreased the bundle size by 40% (CSS) and 30% (JS)',
      'Completely rebuilt most of the mortgage calculators, these receive traffic in the thousands and can reach well over a hundred thousand users after a government budget refresh',
      'Interviewed and provided feedback to the engineering manager on multiple candidates',
    ],
    skills: [
      'React',
      'GraphQL',
      'JavaScript',
      'TypeScript',
      'CSS-in-JS',
      'Emotion',
      'styled-components',
      'CSS 3',
      'CSS Modules',
      'SASS',
      'HTML 5',
      'JSON',
      'XML',
      'ESLint',
      'Webpack',
      'Storybook',
      'Jest',
      'React Testing library',
      'Cypress',
      'Playwright',
      'Git',
      'CircleCI',
      'Jira',
      'RWD',
      'AWS',
      'Airbrake',
      'Calibre',
      'Lighthouse',
    ],
    projects: [
      {
        name: 'Which? | Global navigation',
        url: 'https://www.which.co.uk',
        image: '/images/projects/which-global-navigation.jpg',
      },
      {
        name: 'Which? | Category example',
        url: 'https://www.which.co.uk/technology',
        image: '/images/projects/which-category-example.jpg',
      },
      {
        name: 'Which? | Listing example',
        url: 'https://www.which.co.uk/reviews/food-and-drink/article/guides',
        image: '/images/projects/which-listing-example.jpg',
      },
      {
        name: 'Which? | Article example',
        url: 'https://www.which.co.uk/reviews/food-and-drink/article/best-buy-food-and-drink-aCHpy6l9oPzX',
        image: '/images/projects/which-article-example.jpg',
      },
      {
        name: 'Which? | Mortgage repayments calculator',
        url: 'https://www.which.co.uk/money/mortgages-and-property/mortgage-calculators/mortgage-repayment-calculator-aaq242x4qttl',
        image: '/images/projects/which-help-to-buy.jpg',
      },
    ],
  },
  {
    title: 'Royal Opera House',
    slug: 'royal-opera-house',
    intro: [
      'A very unique & interesting place to work (the office is actually located in the same building as the main stage), I was the first Front End Developer to join the digital development team and was involved in all aspects of the website redesign project.',
    ],
    achievements: [
      'Increased engagement and sign-ups by 11% via the new website pages and improvements that were made',
      'Decreased the average page speed of the old site from eight seconds down to just over two with the use of the new components/pages',
      'Took part in user observations and research which allowed us to tweak the new website components and pages based on actual user feedback',
    ],
    skills: [
      'HTML 5',
      'CSS 3',
      'BEM',
      'JavaScript',
      'JSON',
      'React',
      'Redux',
      'redux-saga',
      'react-helmet',
      'React Router',
      'Babel',
      'ESLint',
      'TypeScript',
      'Flow',
      'Webpack',
      'styled-components',
      'Storybook',
      'Enzyme',
      'Jest',
      'Sinon',
      'Cypress',
      'BitBucket',
      'Jenkins',
      'Jira',
      'Trello',
      'RWD',
      'AWS',
    ],
    projects: [
      {
        name: 'Royal Opera House',
        url: 'https://www.roh.org.uk/',
        image: '/images/projects/roh.jpg',
      },
      {
        name: 'ROH | Eat and drink',
        url: 'https://www.roh.org.uk/eat-and-drink',
        image: '/images/projects/roh-eat.jpg',
      },
      {
        name: 'ROH | Tickets and events',
        url: 'https://www.roh.org.uk/tickets-and-events',
        image: '/images/projects/roh-tickets.jpg',
      },
      {
        name: 'ROH | Visit US',
        url: 'https://www.roh.org.uk/visit-us',
        image: '/images/projects/roh-visit.jpg',
      },
    ],
  },
  {
    title: 'French Connection',
    slug: 'french-connection',
    intro: [
      'Responsible for all development projects for the French Connection group which included several websites for FCUK, FCUS, FCCA and Great Plains. I interviewed, provided feedback and hired a number of junior front end developers during my tenure at French Connection, I mentored and supported them with 1:1 meetings to allow them to grow and develop into great engineers. I also worked very closely with the content, design & SEO teams whilst also working with our external back-end partner and various third-parties such as Qubit, Reevoo, and Feefo.',
    ],
    achievements: [
      'Rebuilt the entire checkout flow which increased sales by 13%',
      'Mentored juniors into great front end developers',
      'Added core features such as the store locator and wishlist',
      'Introduced Agile ways of working along with a ticketing system to increase productivity',
      'Consistency monitored and fixed various issues relating to page speed',
      'Deploying multiple changes to the different websites within strict timelines',
    ],
    skills: [
      'CSS 3',
      'HTML 5',
      'JavaScript',
      'React',
      'SASS',
      'Git',
      'AJAX',
      'jQuery',
      'Babel',
      'ES6',
      'Grunt',
      'Gulp',
      'Webpack',
      'JSON',
      'XML',
      'Photoshop',
      'WordPress',
    ],
    projects: [
      {
        name: 'French Connection | FCUK',
        url: 'https://www.frenchconnection.com/',
        image: '/images/projects/fcuk.jpg',
      },
      {
        name: 'French Connection | FCUS',
        url: 'https://usa.frenchconnection.com/',
        image: '/images/projects/fcus.jpg',
      },
      {
        name: 'Great Plains',
        url: 'https://www.greatplains.co.uk/',
        image: '/images/projects/greatplains.jpg',
      },
    ],
  },
  {
    title: 'Virgin Media',
    slug: 'virgin-media',
    intro: [
      'In the heart of Covent Garden, I started working on the Virgin Media and Mobile websites. I developed new features and pages whilst maintaining existing content and I also became the lead Maxymiser developer that implemented AB/MVT tests across the two sites.',
    ],
    achievements: [],
    skills: [
      'CSS',
      'SASS',
      'HTML',
      'BitBucket',
      'jQuery',
      'JavaScript',
      'Photoshop',
      'RWD',
      'Fiddler',
      'Maxymiser',
      'CQ5',
      'Team Site',
    ],
    projects: [
      {
        name: 'Virgin Media',
        url: 'https://my.virginmedia.com/home/index',
        image: '/images/projects/virginmedia.jpg',
      },
      {
        name: 'Virgin Mobile',
        url: 'https://www.virginmedia.com/mobile',
        image: '/images/projects/virginmobile.jpg',
      },
    ],
  },
];
