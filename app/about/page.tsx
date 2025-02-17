import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <>
      <h1>About</h1>
      <p>
        I really love what I do and consider it a creative passion. It&#39;s
        helped me build a great set of professional and personal skills such as
        having a very good eye for detail (pixel perfect), being able to balance
        creative designs whilst maintaining good usability, accurately and
        efficiently managing my time and I&#39;m also very easy to get along
        with.
      </p>
      <p>
        I have had the chance to work in a wide range of industries, these
        include agencies, automotive, fashion, charity, large enterprises and
        start ups. This has allowed me to gain a deep familiarity with the full
        product life cycle in a range of different environments. I&#39;ve also
        been involved in architectural decisions, usability testing,
        wireframing, design mocking, prototyping and proof of concepts.
      </p>
      <p>
        I&#39;m also very aware of the importance of accessability and how it
        impacts individuals, businesses and society. SEO and web performance
        also play a crucial aspect too, having built up a good knowledge of them
        all has enabled me to create easy to navigate and performant websites.
        Please feel free to run a lighthouse test on my portfolio, I&#39;m
        really happy with the scores but I&#39;m always seeking out ways of
        improving them.
      </p>
      <figure className="lg:w-1/2">
        <blockquote>
          The very substance of the ambitious is merely the shadow of a dream.
        </blockquote>
        <figcaption> — William Shakespeare</figcaption>
      </figure>
      <p>
        My experience so far has enabled me to lead front end teams by
        collaborating and managing both the business and development
        requirements whilst ensuring smooth user journeys and interfaces. I also
        enjoy mentoring and developing more junior developers through code
        reviews, tech meetings and knowledge/idea sharing.
      </p>
      <p>
        I previously worked within a squad at{' '}
        <Link
          className="font-bold underline hover:no-underline"
          href="https://www.which.co.uk/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Which?
        </Link>{' '}
        completing various projects and tasks. I&#39;ve also worked with some
        other great companies in the past, you can find some examples of my work
        in my{' '}
        <Link
          className="font-bold underline hover:no-underline"
          href="/portfolio"
        >
          portfolio
        </Link>
        .
      </p>
    </>
  );
}
