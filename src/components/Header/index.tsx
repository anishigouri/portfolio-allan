import Image from 'next/image'
import { HeaderStyled, NavStyled } from './sytles'
import logo from '@/assets/logo.png'

export function Header() {
  return (
    <HeaderStyled>
      <Image src={logo} width={80} height={80} alt="" />
      <NavStyled>
        <ul>
          <li>Sobre mim</li>
          <li>Experiências</li>
          <li>Educação</li>
        </ul>
      </NavStyled>
    </HeaderStyled>
  )
}
