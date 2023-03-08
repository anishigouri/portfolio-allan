import { IProfile } from '@/types/profile'
import Image from 'next/image'
import { useState } from 'react'
import { DescriptionStyled, ProfileStyled } from './styles'
import { motion } from 'framer-motion'

interface IProfileProps {
  profile: IProfile
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function Profile({ profile }: IProfileProps) {
  const [age, setAge] = useState<number>(18)
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <ProfileStyled id="aboutme">
        <motion.div variants={item}>
          <Image src={profile.avatarUrl} width={200} height={200} alt="Allan" />
        </motion.div>
        <DescriptionStyled>
          <motion.div variants={item}>
            <h1>{profile.name}</h1>
          </motion.div>

          <motion.div variants={item}>
            <span>{profile.career}</span>
          </motion.div>

          <motion.div variants={item}>
            <article>{profile.description}</article>
          </motion.div>
        </DescriptionStyled>
      </ProfileStyled>
    </motion.div>
  )
}
