import { techStackIcons } from 'lib/techStackIcons'
import IconBadge from './IconBadge'

interface TechStackBadgeProps {
  tech: string
}

export default function TechStackBadge({ tech }: TechStackBadgeProps) {
  const Icon = techStackIcons[tech]

  return (
    <IconBadge
      key={Icon}
      variant="default"
      className="text-xs"
      iconSrc={Icon}
      iconClassName={`${Icon.includes('next') ? 'dark:invert' : ''}`}
    >
      {tech}
    </IconBadge>
  )
}
