import { IconType } from 'react-icons';

export type Card = {
  href: string;
  src: string;
  name: string;
};

export type Link = {
  href: string;
  label: string;
};

export type Links = Link[];

export type SocialLink = {
  icon: IconType;
} & Link;

export type SocialLinks = SocialLink[];

export type PortfolioCards = {
  hrefUrl: string;
  imageUrl: string;
  name: string;
}[];
