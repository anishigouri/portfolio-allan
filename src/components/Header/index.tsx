import { useDimensions } from '@/hooks/useDimensions'
import { useCycle } from 'framer-motion'
import { useRef } from 'react'
import { MenuToggle } from '../MenuToggle'
import { Navigation } from '../Navigation'
import {
  AnimateBackgroundStyled,
  HeaderContainerStyled,
  NavAnimateStyled,
} from './sytles'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <HeaderContainerStyled>
      <NavAnimateStyled
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <AnimateBackgroundStyled variants={sidebar} />
        <Navigation onClose={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </NavAnimateStyled>
    </HeaderContainerStyled>
  )
}
