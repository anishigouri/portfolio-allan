import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const ProfileAnimateStyled = styled(motion.main, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  height: 'calc(100vh - 7rem)',

  img: {
    borderRadius: 100,
  },
})

export const DescriptionAnimateStyled = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '3rem',
  fontSize: '$lg',

  span: {
    fontWeight: '400',
    borderBottom: '3px solid $blue300',
  },

  article: {
    maxWidth: '800px',
    textAlign: 'center',
    fontSize: '$md',
  },
})
