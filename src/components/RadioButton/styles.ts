import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const RadionButtonStyled = styled('div', {
  width: '5rem',
  height: '3rem',
  backgroundColor: '$backgroundComponent',
  display: 'flex',
  borderRadius: '50px',
  padding: '10px',
  cursor: 'pointer',

  variants: {
    isOn: {
      true: {
        justifyContent: 'flex-end',
      },
      false: {
        justifyContent: 'flex-start',
      },
    },
  },
})

export const HandleStyled = styled(motion.div, {
  width: '1.8rem',
  height: '1.8rem',
  backgroundColor: '$text',
  borderRadius: '50%',
})
