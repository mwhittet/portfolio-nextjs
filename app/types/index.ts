import { IconType } from 'react-icons';
import { z } from 'zod';

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
  portfolioSlug: string;
}[];

export type PortfolioItems = {
  title: string;
  slug: string;
  intro: string[];
  achievements: string[];
  skills: string[];
  projects: {
    name: string;
    url: string;
    image: string;
  }[];
}[];

export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(1000, 'Message is too long'),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
