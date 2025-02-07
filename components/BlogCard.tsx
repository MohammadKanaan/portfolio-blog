import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

interface BlogCardProps {
  post: CoreContent<Blog>
}

export default function BlogCard({ post }: BlogCardProps) {
  const { path, date, title, summary, tags } = post

  return (
    <article className="flex flex-col space-y-2 xl:space-y-0">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date} suppressHydrationWarning>
            {formatDate(date, siteMetadata.locale)}
          </time>
        </dd>
      </dl>
      <div className="space-y-3">
        <div>
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
              {title}
            </Link>
          </h2>
          <div className="flex flex-wrap">{tags?.map((tag) => <Tag key={tag} text={tag} />)}</div>
        </div>
        <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
      </div>
    </article>
  )
}
