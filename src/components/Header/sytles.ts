import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const HeaderContainerStyled = styled('header', {
  height: '5rem',
})

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
  background: '$backgroundComponent',
  zIndex: 1,
})

export const RadionButtonContainerStyled = styled('div', {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
})
