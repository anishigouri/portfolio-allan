import type { NextApiRequest, NextApiResponse } from 'next'

export type IEnterprise = {
  id: number
  name: string
  logo: string
}

export type IExperience = {
  id: number
  enterprise: IEnterprise
  description: string
  position: string
  initDate: string
  endDate: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IExperience[]>,
) {
  const experiences: IExperience[] = [
    {
      id: 1,
      description:
        'Responsável pela criação de novas ferramentas e manutenção das aplicações da empresa em React e AngularJS',
      position: 'Frontend Developer',
      initDate: '11/2020',
      endDate: '',
      enterprise: {
        id: 1,
        name: 'KOIN',
        logo: 'https://blog.koin.com.br/wp-content/uploads/2021/06/cropped-koin_Logo20RGB20bola20cinza20-20k20colorido__d8dac0432724463ca8bc096651c391b4.png',
      },
    },
    {
      id: 2,
      description:
        'Responsável pela criação de novas ferramentas e manutenção das aplicações da empresa em React e AngularJS',
      position: 'Frontend Developer',
      initDate: '05/2020',
      endDate: '11/2020',
      enterprise: {
        id: 2,
        name: 'BBNK',
        logo: 'https://scontent.fssz1-1.fna.fbcdn.net/v/t39.30808-6/304908635_431283935650131_338719410008895140_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IvgdBwWG-1UAX_j3MDW&_nc_ht=scontent.fssz1-1.fna&oh=00_AfAdeLuL7seWJ6TVdF8Y_z6pYYpf0qfD5z--u3u2i5AuSw&oe=640D37E9',
      },
    },
    {
      id: 3,
      description:
        'Responsável pela criação de novas ferramentas e manutenção das aplicações da empresa em React e AngularJS',
      position: 'Fullstack Developer',
      initDate: '04/2019',
      endDate: '04/2020',
      enterprise: {
        id: 3,
        name: 'Tegra',
        logo: 'https://scontent.fssz1-1.fna.fbcdn.net/v/t1.6435-9/183192608_3815441795231733_1835609524605672063_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Hu6mcjOjYfIAX_VL6JA&_nc_ht=scontent.fssz1-1.fna&oh=00_AfBPanjoPxlRSKJgNDWkJc4rWj3yaJmX1LHUITD_7w-0Xw&oe=642F08BD',
      },
    },
  ]

  res.status(200).json(experiences)
}
