import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const RadionButtonStyled = styled('div', {
  width: '5rem',
  height: '3rem',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  display: 'flex',
  justifyContent: 'flex-start',
  borderRadius: '50px',
  padding: '10px',
  cursor: 'pointer',

  variants: {
    isOn: {
      true: {
        justifyContent: 'flex-end',
      },
    },
  },
})

export const HandleStyled = styled(motion.div, {
  width: '1.8rem',
  height: '1.8rem',
  backgroundColor: 'white',
  borderRadius: '50%',
})
