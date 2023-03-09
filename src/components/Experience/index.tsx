import { IExperience } from '@/pages/api/experience'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import useSwr from 'swr'
import {
  ExperienceContainerAnimateStyled,
  ExperienceItemSelectedLogoStyled,
  ExperienceItemSelectedAnimateStyled,
  ExperienceItemStyled,
  ExperienceNavStyled,
  ExperienceStyled,
} from './styles'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const experienceTitleVariants: Variants = {
  offscreen: {
    x: 500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.6,
    },
  },
}

const experienceVariants: Variants = {
  offscreen: {
    x: -500,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
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
    <ExperienceContainerAnimateStyled
      id="experience"
      initial="offscreen"
      whileInView="onscreen"
      transition={{ staggerChildren: 0.5 }}
      viewport={{ once: false, amount: 0.8 }}
    >
      <motion.h1 variants={experienceTitleVariants}>
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
            <ExperienceItemSelectedAnimateStyled>
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
            </ExperienceItemSelectedAnimateStyled>
          </ExperienceStyled>
        )}
      </motion.div>
    </ExperienceContainerAnimateStyled>
  )
}
