import { Variants, motion } from 'framer-motion'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import {
  ContactContainerAnimateStyled,
  ContactItemStyled,
  ContactStyled,
} from './styles'

const contactTitleVariants: Variants = {
  offscreen: {
    x: 500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
}

const contactVariants: Variants = {
  offscreen: {
    x: -500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
}

export function Contact() {
  return (
    <ContactContainerAnimateStyled
      id="contact"
      initial="offscreen"
      whileInView="onscreen"
      transition={{ staggerChildren: 0.5 }}
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.h1 variants={contactTitleVariants}>Contatos</motion.h1>
      <ContactStyled variants={contactVariants}>
        <ContactItemStyled href="mailto:allanfurlani@gmail.com">
          <MdOutlineMailOutline size={40} />
          <span>allanfurlani@gmail.com</span>
        </ContactItemStyled>
        <ContactItemStyled href="https://wa.me/5511973505162" target="_blank">
          <BsWhatsapp size={40} />
          <span>(11) 97350-5162</span>
        </ContactItemStyled>
        <ContactItemStyled
          href="https://www.linkedin.com/in/allan-furlani-nishigouri-a5691533/"
          target="_blank"
        >
          <BsLinkedin size={40} />
          <span>@anishigouri</span>
        </ContactItemStyled>
        <ContactItemStyled
          href="https://github.com/anishigouri"
          target="_blank"
        >
          <BsGithub size={40} />
          <span>@anishigouri</span>
        </ContactItemStyled>
      </ContactStyled>
    </ContactContainerAnimateStyled>
  )
}
