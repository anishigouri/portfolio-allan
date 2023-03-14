import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const ContactContainerAnimateStyled = styled(motion.footer, {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '3rem',
  margin: '5rem 0',
})

export const ContactStyled = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  '@md': {
    flexWrap: 'wrap',
  },
})

export const ContactItemStyled = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  borderRadius: 8,
  transition: '0.3s',
  color: '$text',
  width: '100%',

  span: {
    whiteSpace: 'nowrap',
  },

  '&:hover': {
    cursor: 'pointer',
    background: '$blue600',
  },
})
