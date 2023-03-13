import { Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoIosArrowDropup } from 'react-icons/io'
import { ButtonContainerStyled } from './styles'

const variants: Variants = {
  hidden: {
    opacity: 0,
    rotate: [0, 360],
    transition: { type: 'spring', delay: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: { type: 'spring', delay: 0.2 },
  },
}

export function ScrollButton() {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <ButtonContainerStyled
      onClick={scrollToTop}
      variants={variants}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
    >
      <IoIosArrowDropup size={50} />
    </ButtonContainerStyled>
  )
}
