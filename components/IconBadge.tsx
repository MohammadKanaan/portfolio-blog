import * as React from 'react'
import { Badge, BadgeProps } from './ui/badge'
import { cn } from 'lib/utils'
import Image from 'next/image'

interface IconBadgeProps extends BadgeProps {
  icon?: React.ReactElement
  iconSrc?: string
  iconPosition?: 'left' | 'right'
  iconClassName?: string
  className?: string
  variant?: 'secondary' | 'default' | 'destructive' | 'outline'
}

export default function IconBadge({
  children,
  icon,
  iconSrc,
  iconPosition = 'left',
  iconClassName,
  className,
  variant = 'default',
  ...props
}: IconBadgeProps) {
  const iconElement = icon ? (
    React.cloneElement(icon, {
      className: cn('w-3 h-3', iconClassName),
    })
  ) : iconSrc ? (
    <Image src={iconSrc} className={cn('h-3 w-3', iconClassName)} alt="" />
  ) : null

  return (
    <Badge
      className={cn(
        'items-center gap-1.5',
        iconPosition === 'right' && 'flex-row-reverse',
        'border border-neutral-300 dark:border-neutral-800',
        className
      )}
      variant={variant}
      {...props}
    >
      {iconElement}
      {children}
    </Badge>
  )
}
