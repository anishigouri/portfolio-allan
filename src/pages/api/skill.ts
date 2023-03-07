import type { NextApiRequest, NextApiResponse } from 'next'
import * as ReactIcons from 'react-icons/si'

export type ISkill = {
  icon: keyof typeof ReactIcons
  description: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISkill[]>,
) {
  const skills: ISkill[] = [
    {
      description: 'HTML5',
      icon: 'SiHtml5',
    },
    {
      description: 'CSS3',
      icon: 'SiCss3',
    },
    {
      description: 'Javascript',
      icon: 'SiJavascript',
    },
    {
      description: 'Typescript',
      icon: 'SiTypescript',
    },
    {
      description: 'React',
      icon: 'SiReact',
    },
    {
      description: 'Next',
      icon: 'SiNextdotjs',
    },
    {
      description: 'Redux',
      icon: 'SiRedux',
    },
    {
      description: 'Vue',
      icon: 'SiVuedotjs',
    },
    {
      description: 'Nuxt',
      icon: 'SiNuxtdotjs',
    },
    {
      description: 'Vuex',
      icon: 'SiNuxtdotjs',
    },
    {
      description: 'Material UI',
      icon: 'SiMaterialui',
    },
    {
      description: 'Bootstrap',
      icon: 'SiBootstrap',
    },
    {
      description: 'CSS-in-JS',
      icon: 'SiNuxtdotjs',
    },
    {
      description: 'Vuetify',
      icon: 'SiVuetify',
    },
    {
      description: 'Sass',
      icon: 'SiNuxtdotjs',
    },
    {
      description: 'Design System',
      icon: 'SiStorybook',
    },
    {
      description: 'Storybook',
      icon: 'SiStorybook',
    },
    {
      description: 'Node',
      icon: 'SiNodedotjs',
    },
    {
      description: 'Express',
      icon: 'SiExpress',
    },
    {
      description: 'Prisma',
      icon: 'SiPrisma',
    },
    {
      description: 'Java',
      icon: 'SiJava',
    },
    {
      description: 'Spring',
      icon: 'SiSpring',
    },
    {
      description: 'Hibernate',
      icon: 'SiHibernate',
    },
    {
      description: 'Mysql',
      icon: 'SiMysql',
    },
    {
      description: 'Postgresql',
      icon: 'SiPostgresql',
    },
    {
      description: 'Mongodb',
      icon: 'SiMongodb',
    },
  ]
  res.status(200).json(skills)
}
