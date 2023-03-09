import { styled } from '@/styles'

export const HeaderStyled = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '7rem',
  borderBottom: '1px solid $gray600',

  '@xs': {
    display: 'none',
  },
})

export const NavStyled = styled('nav', {
  ul: {
    display: 'flex',
    gap: '1rem',
    listStyleType: 'none',
    fontSize: '$md',
    color: '$gray100',

    li: {
      cursor: 'pointer',
      borderBottom: '3px solid transparent',
      borderRadius: '4px',

      transition: '0.3s',
      '&:hover': {
        borderBottom: '3px solid $blue300',
        color: '$gray300',
      },

      a: {
        color: '#fff',
        textDecoration: 'none',
      },
    },
  },
})
