import { styled } from '@/styles'
import { motion } from 'framer-motion'

export const ExperienceContainerAnimateStyled = styled(motion.div, {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '8rem',
  margin: '10rem 0',
})

export const ExperienceStyled = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  gap: '2rem',

  '@xs': {
    flexWrap: 'wrap',
  },
})

export const ExperienceNavStyled = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
  alignItems: 'center',

  '@xs': {
    width: '100%',
  },
})

export const ExperienceItemStyled = styled('li', {
  listStyleType: 'none',
  padding: '1.5rem 1rem',
  width: '15rem',
  cursor: 'pointer',
  background: '$gray800',
  borderRadius: 8,

  variants: {
    active: {
      true: {
        borderLeft: '5px solid $blue600',
      },
    },
  },

  transition: '0.2s',

  '&:hover': {
    background: '$blue600',
  },

  '@xs': {
    width: '90%',
  },
})

export const ExperienceItemSelectedAnimateStyled = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@xs': {
    padding: '0 2rem',
  },

  span: {
    lineHeight: '2rem',
  },
})

export const ExperienceItemSelectedLogoStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
})
