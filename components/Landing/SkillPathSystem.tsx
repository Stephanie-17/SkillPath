import { skillPathSystem } from '@/data/skillPathSystem'
import React from 'react'
import SkillPathSystemCard from './SkillPathSystemCard'

const SkillPathSystem = () => {
	return (
		<section className='p-10 mt-30'>
      <header>
				<h2 className='text-3xl font-bold text-center mb-4'>The Skill Path System</h2>
				<p className='text-center text-sm text-slate-400'>Our proven three-step process to transition from zero to employment ready</p>
				
			</header>

			<section className='flex flex-wrap justify-around mt-18 max-sm:gap-7'>
        {
					skillPathSystem.map(system=>(
						<SkillPathSystemCard key={system.id} iconPath={system.iconPath} iconAltText={system.iconAltText} id={system.id} process={system.process} desc={system.desc} />
					))
				}
			</section>
		</section>
	)
}

export default SkillPathSystem