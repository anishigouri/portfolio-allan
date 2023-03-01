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
        <ContactItemStyled>
          <MdOutlineMailOutline size={40} />
          <span>allanfurlani@gmail.com</span>
        </ContactItemStyled>
        <ContactItemStyled>
          <BsWhatsapp size={40} />
          <span>(11) 97350-5162</span>
        </ContactItemStyled>
        <ContactItemStyled>
          <BsLinkedin size={40} />
          <span>@anishigouri</span>
        </ContactItemStyled>
        <ContactItemStyled>
          <BsGithub size={40} />
          <span>@anishigouri</span>
        </ContactItemStyled>
      </ContactStyled>
    </ContactContainerStyled>
  )
}
