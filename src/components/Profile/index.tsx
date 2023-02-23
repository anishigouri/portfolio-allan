import { IProfile } from '@/types/profile'
import Image from 'next/image'
import { useState } from 'react'
import { DescriptionStyled, ProfileStyled } from './styles'

interface IProfileProps {
  profile: IProfile
}

export function Profile({ profile }: IProfileProps) {
  const [age, setAge] = useState<number>(18)
  return (
    <ProfileStyled>
      <Image src={profile.avatarUrl} width={200} height={200} alt="Allan" />
      <DescriptionStyled>
        <h1>{profile.name}</h1>
        <span>{profile.career}</span>
        <article>{profile.description}</article>
      </DescriptionStyled>
    </ProfileStyled>
  )
}
