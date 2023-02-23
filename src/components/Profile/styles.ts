import { styled } from '@/styles'
import background from '@/assets/background-profile.jpeg'

export const ProfileStyled = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  height: 'calc(100vh - 7rem)',

  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${background.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  img: {
    borderRadius: 100,
  },
})

export const DescriptionStyled = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '3rem',
  fontSize: '$lg',

  span: {
    fontWeight: '400',
    borderBottom: '3px solid $blue300',
    textTransform: 'uppercase',
  },

  article: {
    maxWidth: '800px',
    textAlign: 'center',
    fontSize: '$md',
  },
})
