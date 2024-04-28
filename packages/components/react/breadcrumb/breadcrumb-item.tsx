import React from 'react'
import { breadcrumbItem, cn } from '@openui-org/theme'

export interface Comp extends HTMLLIElement {}
export interface Props extends React.ComponentPropsWithoutRef<'li'> {}

const BreadcrumbItem = React.forwardRef<Comp, Props>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(breadcrumbItem(), className)}
    {...props}
  />
))

BreadcrumbItem.displayName = 'BreadcrumbItem'

export default BreadcrumbItem
