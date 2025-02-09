import DownloadResumeButton from '@/components/DownloadResumeButton'
import Image from '@/components/Image'
import SkillsSection from '@/components/SkillsSection'
import SocialIcon from '@/components/social-icons'
import type { Authors } from 'contentlayer/generated'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col items-center pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-40 w-40 rounded-full"
              />
            )}
          </div>
          <div className="space-y-2 pt-6">
            <div>
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
              <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{company}</div>
            </div>
            <div className="flex flex-row gap-2">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center space-y-2">
          <div className="xl:w-2/3">
            <div className="prose max-w-none py-8 dark:prose-invert">{children}</div>
            <SkillsSection />
          </div>
        </div>
        <div className="flex flex-row justify-center space-y-2">
          <div className="xl:w-2/3">
            <Link
              href="/projects"
              className="underline-effect flex w-fit flex-row items-center gap-2"
            >
              <h3 className="text-2xl font-bold">Projects</h3>
              <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
