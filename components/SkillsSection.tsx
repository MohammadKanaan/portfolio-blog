import React from 'react'
import TechStackBadge from './TechStackBadge'
import DownloadResumeButton from './DownloadResumeButton'

export default function SkillsSection() {
  const skills = {
    Frontend: ['React', 'NextJS', 'React Native', 'Flutter', 'Tailwind CSS'],
    Backend: ['NodeJS', 'Laravel', 'FastAPI', 'Firebase'],
    Database: ['PostgreSQL', 'MongoDB'],
    Other: ['Git', 'Docker'],
  }
  return (
    <div className="space-y-3">
      <div className="flex flex-row items-baseline justify-between">
        <h3 className="text-2xl font-bold">Skills</h3>
        <DownloadResumeButton />
      </div>
      {Object.keys(skills).map((skillName) => {
        const skill = skills[skillName]
        return (
          <div className="flex flex-row flex-wrap gap-1" key={skillName}>
            <span className="text-lg font-semibold">{skillName}: </span>
            {skill.map((s) => (
              <TechStackBadge tech={s} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
