import SocialLinks from '@/app/ui/social-links';
import { NAME } from '@/app/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 text-center text-sm">
      <SocialLinks />
      <p className="!m-0">
        Proudly built with NextJs, TypeScript & Tailwind, hosted via Netlify
      </p>
      <p>
        Copyright &copy; {year}, {NAME}
      </p>
    </footer>
  );
}
