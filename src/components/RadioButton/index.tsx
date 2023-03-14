import { HandleStyled, RadionButtonStyled } from './styles'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

interface IProps {
  value: boolean
  onChange: (value: boolean) => void
}

export function RadioButton({ onChange, value = false }: IProps) {
  return (
    <RadionButtonStyled isOn={value} onClick={() => onChange(!value)}>
      <HandleStyled transition={spring} layout />
    </RadionButtonStyled>
  )
}
