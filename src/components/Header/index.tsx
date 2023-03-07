import Image from 'next/image'
import { HeaderStyled, NavStyled } from './sytles'
import logo from '@/assets/logo.png'

export function Header() {
  return (
    <HeaderStyled>
      <Image src={logo} width={80} height={80} alt="" />
      <NavStyled>
        <ul>
          <li>
            <a href="#aboutme">Sobre mim</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#experience">Experiências</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </NavStyled>
    </HeaderStyled>
  )
}
