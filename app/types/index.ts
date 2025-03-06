import { IconType } from 'react-icons';
import { z } from 'zod';

export type Card = {
  href: string;
  src: string;
  name: string;
};

export const ContactFormSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Name is required' })
    .max(100, { message: 'Name is too long' }),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email format' }),
  message: z
    .string()
    .nonempty({ message: 'Message is required' })
    .max(1000, { message: 'Message is too long' }),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;

export type Link = {
  href: string;
  label: string;
};

export type Links = Link[];

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

export type SocialLink = {
  icon: IconType;
} & Link;

export type SocialLinks = SocialLink[];
