import { styled } from '@/styles'

export const ContactContainerStyled = styled('footer', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '2rem',
  margin: '5rem 0',
})

export const ContactStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const ContactItemStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  borderRadius: 8,
  transition: '0.3s',

  '&:hover': {
    cursor: 'pointer',
    background: '$gray700',
  },
})
