import Card from '@/app/ui/card';
import { Metadata } from 'next';
import { PORTFOLIO_CARDS } from '../data';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function Page() {
  const portfolioCards = (start: number, end?: number) =>
    PORTFOLIO_CARDS.slice(start, end).map((item, index) => {
      const { hrefUrl, imageUrl, name } = item;

      return <Card href={hrefUrl} key={index} name={name} src={imageUrl} />;
    });

  return (
    <>
      <h1>Portfolio</h1>
      <p>
        I&#39;ve worked at various sized companies from small start-ups,
        agencies and enterprises but I also try and work on personal projects
        when I can too, here are a few examples:
      </p>
      <h2>Personal projects:</h2>
      <div className="grid gap-7 grid-cols-[1fr_1fr] mb-7">
        {portfolioCards(0, 2)}
      </div>

      <h2>Professional experience:</h2>
      <div className="grid gap-7 grid-cols-[1fr_1fr]">{portfolioCards(2)}</div>
    </>
  );
}
