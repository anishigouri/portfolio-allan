import {
  ContactContainerStyled,
  ContactItemStyled,
  ContactStyled,
} from './styles'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

export function Contact() {
  return (
    <ContactContainerStyled>
      <h1>Contatos</h1>
      <ContactStyled>
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
    </ContactContainerStyled>
  )
}
