'use client'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import { usePathname } from 'next/navigation'
import { cn } from 'lib/utils'
import { useIsMobile } from 'hooks/useIsMobile'

export default function Header() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  let headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 dark:bg-opacity-30 justify-end sm:justify-center rounded-xl p-4'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-4 z-50'
  }

  return (
    <header className={headerClass}>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto pr-2 sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map(
              (link) =>
                !isMobile &&
                link.title.toLowerCase() !== 'tags' && (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={cn(
                      'm-1 block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400',
                      pathname === link.href
                        ? 'underline-effect-perm text-primary-500 dark:text-primary-400'
                        : 'underline-effect'
                    )}
                  >
                    {link.title}
                  </Link>
                )
            )}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}
