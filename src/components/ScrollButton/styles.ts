import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const ButtonContainerStyled = styled(motion.button, {
  position: 'fixed',
  background: '$gray700',
  border: 'none',
  borderRadius: 8,
  bottom: '2rem',
  right: '2rem',
  cursor: 'pointer',
  color: '$gray300',
  padding: '1rem',
  variants: {
    hidden: {
      true: {
        display: 'none',
      },
    },
  },
})
