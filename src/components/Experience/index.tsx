import {
  ExperienceContainerStyled,
  ExperienceItemSelectedLogoStyled,
  ExperienceItemSelectedStyled,
  ExperienceItemStyled,
  ExperienceNavStyled,
  ExperienceStyled,
} from './styles'
import useSwr from 'swr'
import { IExperience } from '@/pages/api/experience'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function Experience() {
  const [experienceSelected, setExperienceSelected] =
    useState<IExperience | null>()

  const { data: experiences } = useSwr<IExperience[]>(
    '/api/experience',
    fetcher,
  )

  useEffect(() => {
    if (experiences && experiences.length > 0) {
      setExperienceSelected(experiences[0])
    }
  }, [experiences])

  return (
    <ExperienceContainerStyled id="experience">
      <h1>Experiências (3 últimas)</h1>
      {experienceSelected && (
        <ExperienceStyled>
          <ExperienceNavStyled>
            {experiences?.map((experience) => (
              <ExperienceItemStyled
                active={experience.id === experienceSelected.id}
                key={experience.id}
                onClick={() => setExperienceSelected(experience)}
              >
                <a>{experience.enterprise.name}</a>
              </ExperienceItemStyled>
            ))}
          </ExperienceNavStyled>
          <ExperienceItemSelectedStyled>
            <ExperienceItemSelectedLogoStyled>
              <div>
                <Image
                  src={experienceSelected.enterprise.logo}
                  width={80}
                  height={80}
                  alt=""
                />
                <h2>{experienceSelected.enterprise.name}</h2>
              </div>
              <div>
                <span>
                  Início: {experienceSelected.initDate}
                  {experienceSelected.endDate && (
                    <> | Fim: {experienceSelected.endDate}</>
                  )}
                </span>
              </div>
            </ExperienceItemSelectedLogoStyled>
            <span>{experienceSelected.description}</span>
          </ExperienceItemSelectedStyled>
        </ExperienceStyled>
      )}
    </ExperienceContainerStyled>
  )
}
