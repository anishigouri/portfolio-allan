import { styled } from '@/styles'

export const SkillContainerStyled = styled('section', {
  width: '100%',
  gap: '2rem',
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h1: {
    fontSize: '2rem',
  },
})

export const SkillItemsStyled = styled('div', {
  width: '100%',
  gap: '2rem',
  borderRadius: 8,
  marginTop: '2rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

export const SkillItemStyled = styled('div', {
  padding: '2rem',
  width: '10rem',
  height: '10rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',
  background: '$backgroundComponent',
  color: '$text',
  borderRadius: 8,
  borderBottom: '5px solid $blue300',
})
