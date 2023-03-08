import {
  ContactContainerStyled,
  ContactItemStyled,
  ContactStyled,
} from './styles'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { Variants, motion } from 'framer-motion'

const contactVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
}

export function Contact() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <ContactContainerStyled id="contact">
        <motion.h1 variants={contactVariants}>Contatos</motion.h1>
        <motion.div variants={contactVariants}>
          <ContactStyled>
            <ContactItemStyled href="mailto:allanfurlani@gmail.com">
              <MdOutlineMailOutline size={40} />
              <span>allanfurlani@gmail.com</span>
            </ContactItemStyled>
            <ContactItemStyled
              href="https://wa.me/5511973505162"
              target="_blank"
            >
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
        </motion.div>
      </ContactContainerStyled>
    </motion.div>
  )
}
