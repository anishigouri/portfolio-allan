import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const HeaderContainerStyled = styled('header', { height: '7rem' })

export const NavAnimateStyled = styled(motion.nav, {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: '300px',
  zIndex: 1,
})

export const AnimateBackgroundStyled = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  width: '300px',
  background: '$gray600',
  zIndex: 1,
})
