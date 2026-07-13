import React, { useState } from 'react'
import { BrainCircuit, Layout, Server, Wrench } from 'lucide-react'
import { SKILLS } from '../constants'

const iconMap = {
  BrainCircuit,
  Layout,
  Server,
  Wrench,
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SKILLS[0].name)

  const activeSkills =
    SKILLS.find((category) => category.name === activeCategory) || SKILLS[0]
  const Icon =
    iconMap[activeSkills.icon.displayName as keyof typeof iconMap] ||
    BrainCircuit

  return (
    <section
      id='skills'
      className='min-h-screen px-6 md:px-10 lg:px-16 py-24 md:py-32 border-b border-zinc-800 bg-zinc-950 text-zinc-200'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 md:mb-14'>
          <p className='mb-3 text-sm uppercase tracking-[0.35em] text-brand-300'>
            Core Expertise
          </p>
          <h2 className='text-3xl md:text-5xl font-black uppercase tracking-tight text-white'>
            Skills & Specializations
          </h2>
          <p className='mt-4 max-w-2xl text-base md:text-lg text-zinc-400'>
            I build across AI systems, product interfaces, and backend
            infrastructure with a focus on clean architecture and polished user
            experiences.
          </p>
        </div>

        <div className='grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]'>
          <div className='rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 shadow-2xl shadow-black/20'>
            <div className='space-y-2'>
              {SKILLS.map((category) => {
                const isActive = category.name === activeCategory
                const CategoryIcon = category.icon

                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-all ${
                      isActive
                        ? 'border-brand-300 bg-brand-300/10 text-brand-300'
                        : 'border-zinc-800 bg-zinc-950/70 text-zinc-300 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <span className='flex items-center gap-3'>
                      <CategoryIcon size={18} />
                      <span className='font-medium'>{category.name}</span>
                    </span>
                    <span className='text-xs uppercase tracking-[0.25em] text-zinc-500'>
                      0{SKILLS.indexOf(category) + 1}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className='rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-8 md:p-10 shadow-2xl shadow-black/20'>
            <div className='mb-8 flex items-center gap-4'>
              <div className='rounded-2xl border border-brand-300/30 bg-brand-300/10 p-3 text-brand-300'>
                <Icon size={24} />
              </div>
              <div>
                <p className='text-sm uppercase tracking-[0.35em] text-zinc-500'>
                  Selected Focus
                </p>
                <h3 className='text-2xl font-semibold text-white'>
                  {activeSkills.name}
                </h3>
              </div>
            </div>

            <div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-3'>
              {activeSkills.skills.map((skill) => (
                <div
                  key={skill}
                  className='rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm font-medium text-zinc-200 transition-transform duration-200 hover:-translate-y-1 hover:border-brand-300/40'
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
