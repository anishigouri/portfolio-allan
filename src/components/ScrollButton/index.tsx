import { useEffect, useState } from 'react'
import { ButtonContainerStyled } from './styles'
import { IoIosArrowDropup } from 'react-icons/io'

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
      behavior: 'smooth',
    })
  }

  return (
    <ButtonContainerStyled hidden={!visible} onClick={scrollToTop}>
      <IoIosArrowDropup size={50} />
    </ButtonContainerStyled>
  )
}
