import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const MenuToggleContainerStyled = styled(motion.button, {
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  position: 'fixed',
  top: '18px',
  left: '15px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: '$backgroundComponent',
  zIndex: 2,
  color: '$text',
})
