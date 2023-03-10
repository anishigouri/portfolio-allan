import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const MenuItemAnimateStyled = styled(motion.a, {
  marginBottom: '3rem',
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  gap: '1rem',

  span: {
    fontWeight: 600,
    fontSize: '1.25rem',
  },
})
