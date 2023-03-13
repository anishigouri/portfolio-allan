import { useEffect, useState } from 'react'
import { ButtonContainerStyled } from './styles'
import { IoIosArrowDropup } from 'react-icons/io'
import { Variants } from 'framer-motion'

const variants: Variants = {
  hidden: {
    opacity: 0,
    rotate: [0, 90, 180, 270, 360],
    transition: { type: 'spring', delay: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: { type: 'spring', delay: 0.2 },
    rotate: 0,
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
      exit="hidden"
    >
      <IoIosArrowDropup size={50} />
    </ButtonContainerStyled>
  )
}
