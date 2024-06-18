import React, { CSSProperties, FC } from 'react'
import css from '../Timing.module.scss'
import { JobProps } from '../Timing'

const Job: FC<JobProps> = ({ currentJob, days }) => {
   const { project_number, ship_name, job_description, hours_worked } = currentJob

   const getStyles = (val: number) => {
      switch (val) {
         case -0.5:
            return { backgroundImage: 'url(/assets/images/svg/timereport-days-dayof.svg)' }
         case -1:
            return { backgroundImage: 'url(/assets/images/svg/timereport-days-sick.svg)' }
         case -1.5:
            return { backgroundImage: 'url(/assets/images/svg/timereport-days-vac.svg)' }
         default:
            return { backgroundImage: '' }
      }
   }

   const sum = hours_worked.reduce((acc, current) => (current > 0 ? acc + current : acc), 0)
   const info = project_number !== '_common_tasks' ? [project_number, ship_name, job_description] : ['Common', '', '']

   return (
      <div className={css.row}>
         <p></p>
         {info.map((p) => (
            <p key={p}>{p}</p>
         ))}
         <div className={css.days}>
            {days.map((d, i) => {
               const { day } = d

               return (
                  <span style={getStyles(hours_worked[i]) as CSSProperties} key={day}>
                     {hours_worked[i] >= 1 ? hours_worked[i] : ''}
                  </span>
               )
            })}
         </div>
         <p>{sum}</p>
      </div>
   )
}

export default Job
