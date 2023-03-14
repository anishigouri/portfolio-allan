import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const ButtonContainerStyled = styled(motion.button, {
  position: 'fixed',
  background: '$backgroundComponent',
  border: 'none',
  borderRadius: '8px !important',
  bottom: '2rem',
  right: '2rem',
  cursor: 'pointer',
  color: '$text',
  padding: '0.5rem',
})
