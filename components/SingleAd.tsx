import React from 'react'
import { Ad } from '@/supabase/models'

type Props = {
  ad: Ad
}

const SingleAd = ({ ad }: Props) => {

  const { title, description, relevant_skills } = ad;
  return (
    <div className='flex flex-col bg-zinc-600 rounded-lg p-5  w-[80%]'>
      <p>{title}</p>
      <p>{description}</p>
      <div>
        {relevant_skills.map((skill) => (
          <div key={skill.id} className='flex gap-5'>
            <p>{skill.skill}</p>
            <input type="checkbox" checked={skill.founded} className="checkbox" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleAd