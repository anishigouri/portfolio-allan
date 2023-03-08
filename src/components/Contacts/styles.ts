import { styled } from '@/styles'

export const ContactContainerStyled = styled('footer', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '8rem',
  margin: '10rem 0',
})

export const ContactStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const ContactItemStyled = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
  borderRadius: 8,
  transition: '0.3s',
  color: '#fff',

  '&:hover': {
    cursor: 'pointer',
    background: '$gray700',
  },
})
