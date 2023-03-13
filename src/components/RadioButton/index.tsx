import { useState } from 'react'
import { HandleStyled, RadionButtonStyled } from './styles'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

export function RadioButton() {
  const [isOn, setIsOn] = useState<boolean>(false)

  function toggleSwitch() {
    setIsOn(!isOn)
  }

  return (
    <RadionButtonStyled isOn={isOn} onClick={toggleSwitch}>
      <HandleStyled transition={spring} layout />
    </RadionButtonStyled>
  )
}
