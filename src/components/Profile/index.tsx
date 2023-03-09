import { IProfile } from '@/types/profile'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { DescriptionAnimateStyled, ProfileAnimateStyled } from './styles'

interface IProfileProps {
  profile: IProfile
}

const imageAnimate: Variants = {
  offscreen: { x: -1000, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
      delay: 0,
    },
  },
}

const textAnimate: Variants = {
  offscreen: { x: 1000, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
      delay: 0,
    },
  },
}

export function Profile({ profile }: IProfileProps) {
  return (
    <ProfileAnimateStyled
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
      transition={{ staggerChildren: 0.5 }}
      id="aboutme"
    >
      <motion.div variants={imageAnimate}>
        <Image src={profile.avatarUrl} width={200} height={200} alt="Allan" />
      </motion.div>
      <DescriptionAnimateStyled variants={textAnimate}>
        <h1>{profile.name}</h1>
        <span>{profile.career}</span>
        <article>{profile.description}</article>
      </DescriptionAnimateStyled>
    </ProfileAnimateStyled>
  )
}
