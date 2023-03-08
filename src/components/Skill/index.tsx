import { ISkill } from '@/pages/api/skill'
import { motion, Variants } from 'framer-motion'
import { useRef } from 'react'
import * as ReactIcons from 'react-icons/si'
import useSwr from 'swr'
import {
  SkillContainerStyled,
  SkillItemsStyled,
  SkillItemStyled,
} from './styles'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type GetIconProps = {
  icon: keyof typeof ReactIcons
}

const skillVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.6,
    },
  },
}

export function Skill() {
  const { data: skills } = useSwr<ISkill[]>('/api/skill', fetcher)

  const getIcon = ({ icon }: GetIconProps) => {
    const TagName = ReactIcons[icon]
    return <TagName size={50} />
  }

  return (
    <SkillContainerStyled id="skills">
      <h1>Habilidades</h1>
      <SkillItemsStyled>
        {skills?.map((skill) => (
          <motion.div
            key={skill.description}
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div className="card" variants={skillVariants}>
              <SkillItemStyled>
                {getIcon({ icon: skill.icon })}
                <span>{skill.description}</span>
              </SkillItemStyled>
            </motion.div>
          </motion.div>
        ))}
      </SkillItemsStyled>
    </SkillContainerStyled>
  )
}
