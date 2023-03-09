import { ISkill } from '@/pages/api/skill'
import { motion, Variants } from 'framer-motion'
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
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: [180, 150, 120, 90, 60, 30, 0],
    opacity: 1,
    transition: {
      type: 'tween',
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
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.div variants={skillVariants}>
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
