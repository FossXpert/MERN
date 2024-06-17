import { styles } from '@/app/styles/style';
import React from 'react'
import {FC} from 'react'

type Props = {
    benefits:{title:string}[];
    setBenefits: (benefits: {title:string}[]) => void;
    prerequisites:{title:string}[];
    setPrerequisites : (prerequisites:{title:string}[]) => void;
    active: number;
    setActive: (active:number) => void;
}

const CourseData : FC<Props> = ({benefits,setBenefits,prerequisites,setPrerequisites,active,setActive}) => {
  
        const handleBenefitChange = (index:number,value:any) => {
            const updateBenefits = [...benefits];
            updateBenefits[index].title = value;
            setBenefits(updateBenefits)
        }
    return (
    <div className='w-[80%] m-auto mt-24 block'>
        <div>
            <label className={`${styles.label} text-[20px]`} htmlFor='email'>
                What are the benefits for the student in this course
            </label><br/>
            {
                benefits.map((benefit:any,index:number) => (
                    <input type='text' key={index}
                    name='benefit'
                    placeholder='Ypu will be able to build a full stack LMS Platform'
                    required
                    className={`${styles.input}`}
                    value={benefit.title}
                    onChange={(e) => handleBenefitChange(index,e.target.value)}
                    />
                ))
            }
        </div>

    </div>
  )
}

export default CourseData