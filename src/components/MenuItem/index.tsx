import { AnchorHTMLAttributes, FormEvent, ReactNode } from 'react'
import { MenuItemAnimateStyled } from './styles'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

interface IProps {
  icon: ReactNode
  text: string
  href: string
  onClose: () => void
}

export const MenuItem = ({ icon, text, href, onClose }: IProps) => {
  function onSelectItem(e: FormEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    onClose()
    setInterval(() => {
      window.location.href = href
    }, 1000)
  }

  return (
    <MenuItemAnimateStyled
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => onSelectItem(e, href)}
    >
      {icon}
      <span>{text}</span>
    </MenuItemAnimateStyled>
  )
}
