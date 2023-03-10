import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const MenuItemAnimateStyled = styled(motion.a, {
  listStyle: 'none',
  marginBottom: '3rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  span: {
    fontWeight: 600,
    fontSize: '1.25rem',
  },
})
