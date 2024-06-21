import { styles } from '../../styles/style';
import React from 'react'
import {FC} from 'react'
import toast from 'react-hot-toast';
import { IoMdAddCircle } from 'react-icons/io';

type Props = {
    benefits:{title:string}[];
    setBenefits: (benefits: {title:string}[]) => void;
    prerequisites:{title:string}[];
    setPrerequisites : (prerequisites:{title:string}[]) => void;
    active: number;
    setActive: (active:number) => void;
}

const CourseData : FC<Props> = ({benefits,setBenefits,prerequisites,setPrerequisites,active,setActive}) => {
  
        const handleBenefitChange = (index: number, value: any) => {
            const updateBenefits = benefits.map((benefit, i) => {
            if (i === index) {
                return {...benefit, title: value };
            }
            return benefit;
            });
            setBenefits(updateBenefits);
        }
        
        const handleAddBenefits = async() => {
            setBenefits([...benefits,{title:""}]);
        }

        const handlePrerequisites = (index:number,value:any) => {
            // const updatePrerequisites = [...prerequisites];
            // updatePrerequisites[index].title = value;
            // setPrerequisites(updatePrerequisites)
            const updatePrerequisites = prerequisites.map((prerequisite,i)=>{
                if(i===index){
                    return {...prerequisite,title:value}
                }
                return prerequisite;
            });
            setPrerequisites(updatePrerequisites);
        }

        const handleAddPrerequisites = async() => {
            setPrerequisites([...prerequisites,{title:""}]);
        }

        const prevButton = async() =>{
            setActive(active-1);
        }
        
        const handleOptions = async() => {
            if(prerequisites[prerequisites.length-1]?.title !=="" && benefits[benefits.length-1]?.title !== ""){
                setActive(active+1);
            }else{
                toast.error("Please fill the required Fields")
            }
        }
        
    return (
    <div className='w-[80%] m-auto mt-24 block'>
        <div>
            <label className={`${styles.label} text-[20px]`} htmlFor='email'>
                What are the benefits for the student in this course
            </label><br/>
            {
                benefits.map((benefit:any,index:number) => (
                    <input type='text' 
                    key={index}
                    name='benefit'
                    placeholder='You will be able to build a full stack LMS Platform'
                    required
                    className={`${styles.input}`}
                    value={benefit.title}
                    onChange={(e) => handleBenefitChange(index,e.target.value)}
                    />
            ))}
            <IoMdAddCircle 
                style={{margin: "10px 0px",cursor : "pointer", width:"30px"}}
                onClick={handleAddBenefits}
            />
        </div>

        <div>
            <label className={`${styles.label} text-[20px]`} htmlFor='email'>
                What are the prerequisites for starting this course
            </label><br/>
            {
                prerequisites.map((prerequisites:any,index:number) => (
                    <input type='text' 
                    key={index}
                    name='prerequisites'
                    placeholder='You must be knowing about javascript'
                    required
                    className={`${styles.input}`}
                    value={prerequisites.title}
                    onChange={(e) => handlePrerequisites(index,e.target.value)}
                />
            ))}
            <IoMdAddCircle 
                style={{margin: "10px 0px",cursor : "pointer",width:"30px"}}
                onClick={handleAddPrerequisites}
            />
        </div>

        <div>
            <div className="w-full flex items-center justify-between">
                <div 
                className={`${styles.button1}`}
                onClick={()=>prevButton()}>
                    Prev
                </div>
                <div
                className={`${styles.button1}`}
                onClick={()=>handleOptions()}>
                    Next
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseData