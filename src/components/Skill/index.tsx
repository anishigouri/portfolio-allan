import { ISkill } from '@/pages/api/skill'
import * as ReactIcons from 'react-icons/si'
import useSwr from 'swr'
import {
  SkillItemStyled,
  SkillItemsStyled,
  SkillContainerStyled,
} from './styles'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type GetIconProps = {
  icon: keyof typeof ReactIcons
}

export function Skill() {
  const { data: skills } = useSwr<ISkill[]>('/api/skill', fetcher)

  const getIcon = ({ icon }: GetIconProps) => {
    const TagName = ReactIcons[icon]
    return <TagName size={50} />
  }

  return (
    <SkillContainerStyled>
      <h1>Habilidades</h1>
      <SkillItemsStyled>
        {skills?.map((skill) => (
          <SkillItemStyled key={skill.description}>
            {getIcon({ icon: skill.icon })}
            <span>{skill.description}</span>
          </SkillItemStyled>
        ))}
      </SkillItemsStyled>
    </SkillContainerStyled>
  )
}
