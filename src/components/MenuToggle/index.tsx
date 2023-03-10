import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuToggleContainerStyled } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({ toggle }: any) => (
  <MenuToggleContainerStyled onClick={toggle}>
    <GiHamburgerMenu color="white" size={30} />
  </MenuToggleContainerStyled>
)
