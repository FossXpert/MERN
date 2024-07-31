import { styles } from '../../styles/style';
import React, { FC, useState } from 'react'

type Props = {
    courseInfo : any;
    setCourseInfo : (courseInfo : any) => void;
    active : number
    setActive : (active : number) => void;
}

const CourseInformation:FC<Props> = ({courseInfo,setCourseInfo,active,setActive}) => {
  const [dragging,setDragging] = useState(false);

  const handleFileChange = async(e:any) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if(file){
        const reader = new FileReader();
 
        reader.onload = (e:any) => {
          if(reader.readyState === 2){
            setCourseInfo({...courseInfo,thumbnail : reader.result});
          }
        };
        reader.readAsDataURL(file);
    }
  }

  const handleDragOver = (e:any) => { 
    e.preventDefault();
    setDragging(true);
  }
  const handleDragLeave = (e:any) => {
    e.preventDefault();
    setDragging(true);
  }

  const handleDrop = async(e:any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        setCourseInfo({...courseInfo,thumbnail : reader.result});
      }
      reader.readAsDataURL(file);
    }

  }

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    setActive(active+1);
  };

  return (

    <div className='w-[80%] m-auto mt-14 border'>
        <form onSubmit={handleSubmit} className={`${styles.label}`}>
         <div>
         <label htmlFor=''>
              Course Name
          </label>
          <input
          type="text"
          name=""
          required
          value={courseInfo.name}
          onChange={(e:any) => {
            setCourseInfo({...courseInfo,name:e.target.value})
          }}
          id='name'
          placeholder='MERN Stack LMS Plaform with Next 13'
          className={
          `${styles.input}`}
          />
         </div><br/>
         <div className='mb-5'>
            <label className={`${styles.label}`}>
              Course Description
            </label>
           <textarea 
           className={`${styles.input} !h-min py-2`} 
           name='' id='' cols={30} rows={7} 
           placeholder='Write Something Amazing ...'
           value={`${courseInfo.description}`}
           onChange={(e:any) => setCourseInfo({...courseInfo,description : e.target.value})}>
           </textarea> 
         </div>
         <div className='w-full flex justify-between'>
            <div className='w-[45%]'>
                <label className={`${styles.label}`}>Course Price</label>
                <input
                  type='number'
                  name='price'
                  required
                  value={courseInfo.price}
                  onChange={(e:any) => setCourseInfo({...courseInfo,price : e.target.value})}
                  id='price'
                  placeholder='29'
                  className={`${styles.input}`}
                  />
            </div>
            <div className='w-[45%]'> 
                <label className={`${styles.label}`}>Est. Price(Optional)</label>
                <input
                  type='text'
                  name='estimatedPrice'
                  required
                  value={courseInfo.estimatedPrice}
                  onChange={(e:any) => setCourseInfo({...courseInfo,estimatedPrice : e.target.value})}
                  id='estimatedPrice'
                  placeholder='70'
                  className={`${styles.input}`}
                  />
            </div>
            </div>
            <div className="">
            <label className={`${styles.label}`}>Course Tags</label>
                <input
                  type='text'
                  name='tags'
                  required
                  value={courseInfo.price}
                  onChange={(e:any) => setCourseInfo({...courseInfo,tags : e.target.value})}
                  id='tags'
                  placeholder='MERN,Next 13,Socket io,tailwind css,LMS'
                  className={`${styles.input}`}
                  />
            </div>
            <div className='w-full flex justify-between'>
            <div className='w-[45%]'>
                <label className={`${styles.label}`}>Course Level</label>
                <input
                type='text'
                name='level'
                required
                value={courseInfo.level}
                onChange={(e:any) => setCourseInfo({...courseInfo,level : e.target.value})}
                id='demoUrl'
                placeholder='Easy/Medium/Hard'
                className={`${styles.input}`}
                />
            </div>
            <div className='w-[45%]'>
                <label className={`${styles.label}`}>Demo Url</label>
                <input
                type='text'
                name='demoUrl'
                required
                value={courseInfo.demoUrl}
                onChange={(e:any) => setCourseInfo({...courseInfo,demoUrl : e.target.value})}
                id='demoUrl'
                placeholder='http://www.google.com'
                className={`${styles.input}`}
                />
            </div>
         </div>
         <div className='w-full mt-4' >
            <input
              type='file'
              accept='image/*'
              id='file'
              className='hidden'
              onChange={handleFileChange}
            />
            <label htmlFor='file'
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center
            ${dragging ? "bg-blue-500" : "bg-transparent"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}>
              {
                courseInfo.thumbnail ? ( 
                  <img src={courseInfo.thumbnail} alt=""
                   className='max-h-full w-full object-cover'/>
                ):(
                  <span className='text-black dark:text-white'>
                      Drag and drop your thumbnail here or click to browse
                  </span>
                )
              }
            </label>
         </div>
         <div className='w-full flex items-center justify-end'>
          <input
          type='submit'
          value="Next"
          className='w-full 800px:w-[180px]
           h-[40px] bg-[#37a39a] 
           text-center text-[#fff] 
           rounded mt-8 cursor-pointer'
          />
         </div><br/><br/><br/>
        </form>
    </div>
  )
}

export default CourseInformation