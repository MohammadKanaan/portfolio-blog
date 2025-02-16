import { Project } from 'types'
import Image from './Image'
import Link from './Link'
import TechStackBadge from './TechStackBadge'

export default function ProjectCard({ title, description, imgSrc, href, techStack }: Project) {
  return (
    <div className="md max-w-[544px] p-4 md:w-1/3">
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`} className="hover: underline-effect">
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <div className="flex flex-row flex-wrap gap-1">
            {techStack?.map((tech) => <TechStackBadge key={tech} tech={tech} />)}
          </div>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="underline-effect text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
