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
import { Variants, motion } from 'framer-motion'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const experienceVariants: Variants = {
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <ExperienceContainerStyled id="experience">
        <motion.h1 variants={experienceVariants}>
          Experiências (3 últimas)
        </motion.h1>
        <motion.div variants={experienceVariants}>
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
        </motion.div>
      </ExperienceContainerStyled>
    </motion.div>
  )
}
