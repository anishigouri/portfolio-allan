import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const MenuToggleContainerStyled = styled(motion.button, {
  outline: 'none',
  border: 'none',
  // -webkit-user-select: none;
  // -moz-user-select: none;
  // -ms-user-select: none;
  cursor: 'pointer',
  position: 'absolute',
  top: '16px',
  left: '15px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: '$gray600',
})
