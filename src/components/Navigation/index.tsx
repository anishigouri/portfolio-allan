import { GiSkills } from 'react-icons/gi'
import { MenuItem } from '../MenuItem'
import { NavigationAnimateStyled } from './styles'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

interface IProps {
  onClose: () => void
}

export const Navigation = ({ onClose }: IProps) => (
  <NavigationAnimateStyled variants={variants}>
    <MenuItem
      onClose={onClose}
      icon={<GiSkills />}
      href="#aboutme"
      text="Sobre mim"
    />
    <MenuItem
      onClose={onClose}
      icon={<GiSkills />}
      href="#skills"
      text="Habilidades"
    />
    <MenuItem
      onClose={onClose}
      icon={<GiSkills />}
      href="#experience"
      text="Experiências"
    />
    <MenuItem
      onClose={onClose}
      icon={<GiSkills />}
      href="#contact"
      text="Contatos"
    />
  </NavigationAnimateStyled>
)
