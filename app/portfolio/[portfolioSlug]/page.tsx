import { PORTFOLIO_CARDS, PORTFOLIO_ITEMS } from '@/app/data';
import Card from '@/app/ui/card';

export const dynamicParams = false;

const pageSlugs = PORTFOLIO_CARDS.map(({ portfolioSlug }) => ({
  portfolioSlug,
}));

export function generateStaticParams() {
  return pageSlugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ portfolioSlug: string }>;
}) {
  const { portfolioSlug } = await params;
  const pageData = PORTFOLIO_ITEMS.filter(function (elem) {
    return elem.slug == portfolioSlug;
  });
  const { title } = pageData[0];

  return {
    title,
  };
}

export default async function PortfolioItem({
  params,
}: {
  params: Promise<{ portfolioSlug: string }>;
}) {
  const { portfolioSlug } = await params;
  const pageData = PORTFOLIO_ITEMS.filter(function (elem) {
    return elem.slug == portfolioSlug;
  });
  const { achievements, intro, projects, skills, title } = pageData[0];

  return (
    <>
      <h1>{title}</h1>
      {intro.length > 0 &&
        intro.map((skill, index) => <p key={index}>{skill}</p>)}

      {skills.length > 0 && (
        <>
          <h2>Software, skills & technology used:</h2>
          <ul className="flex flex-wrap p-0 mb-7">
            {skills.map((skill) => (
              <li
                className="inline cursor-default mr-2.5 mb-2.5 p-2 bg-linear-to-t from-bone to-spring-wood shadow-[4px_4px_8px_rgba(0,0,0,0.4)] hover:shadow-[4px_4px_8px_rgba(255,84,0,1)]"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </>
      )}

      {achievements.length > 0 && (
        <>
          <h2>Most recent achievements:</h2>
          <ul className="list-disc mb-7 pl-7">
            {achievements.map((achievement) => (
              <li key={achievement}>
                <p>{achievement}</p>
              </li>
            ))}
          </ul>
        </>
      )}

      {projects.length > 0 && (
        <>
          <h2>What I have worked on:</h2>
          <div className="grid gap-7 md:grid-cols-[1fr_1fr]">
            {projects.map((project, index) => {
              const { image, name, url } = project;

              return <Card href={url} key={index} name={name} src={image} />;
            })}
          </div>
        </>
      )}
    </>
  );
}
