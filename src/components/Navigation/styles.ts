import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const NavigationAnimateStyled = styled(motion.ul, {
  padding: '2rem',
  position: 'fixed',
  top: '100px',
  width: '230px',
  zIndex: 2,
})
