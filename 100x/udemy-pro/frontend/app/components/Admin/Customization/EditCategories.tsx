import { useGetAllCategoriesQuery, useGetHeroDataQuery } from '../../../../redux/features/layout/layoutApi'
import React, { useEffect, useState } from 'react'
import Loader from '../../Loader/Loader';
import { styles } from '../../../../app/styles/style';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import toast from 'react-hot-toast';

type Props = {}

const EditCategories = (props: Props) => {

    const {data,isLoading,error} = useGetAllCategoriesQuery({refetchOnMountOrArgChange : true});
     
    const [categories,setCategories] = useState<any>([]);
    console.log("categories is :",categories);
    console.log("Data is : ",data);

    useEffect(()=>{
        if(data){
            setCategories(data.allCategory)
        }
    },[data]);

    const handleCategoriesAdd = async(id:any,value:string) => {
        setCategories((prevCategory : any) => prevCategory.map((i:any) => (i._id === id ? {...i,categoryName: value} : i)));
        categories.map((i:any) => (console.log("i._id value is ", i._id)));
    }

    const newCategoriesHandler = () => {
        if(categories[categories.length-1].categoryName === ""){
            toast.error("Category Title Can't Be Empty")
        }else{
            setCategories((prevCategory:any) => [...prevCategory,{categoryName : ""}]);
        }
    }

    const areCategoriesUnchanged = (originalCategories:any[],newCategories:any[]) => {
        return JSON.stringify(originalCategories) === JSON.stringify(newCategories);
    }

    // const isAnyCategoryTitleEmpty = (categories : any[]) => {
    //     return categories.some((qv) => q.title === "");
    // }

    const handleEdit = async() => {

    }

  return (
   <>
   {
    isLoading ? (<Loader/>) : (
        <div className='mt-[120px] text-center'>
        <h1 className={`${styles.title}`}>All Categories</h1>
        {categories && categories.categories?.map((item:any,index : number) => {
            return (
                <div className="p-3">
                <div className='flex items-center w-full justify-center'>
                <input className={`${styles.input} !w-[unset] !border-none !text-[20px]`}
                value={item.categoryName}
                onChange={(e) => handleCategoriesAdd(item._id,e.target.value)}
                placeholder='Enter Categories Title ... '
                />
                <AiOutlineDelete className='dark:text-white text-black text-[18px] cursor-pointer'
                onClick={()=>{
                    setCategories((prevCategory :any) => 
                        prevCategory.filter((i:any)=> 
                            i._id !== item._id));
                }}
                />
                </div>
                </div>
            )
        })}
        <br/><br/>
        <div className='w-full flex justify-center'>
            <IoMdAddCircleOutline 
             className='dark:text-white
             text-black text-[25px] 
             cursor-pointer'
            onClick={newCategoriesHandler}
            />
        </div>
        {/* <div className=
                {`${styles.button1} 
        ${areCategoriesUnchanged(data?.category, categories) ||
            isAnyCategoryTitleEmpty(categories) ? 
            "!cursor-not-allowed" : 
            "!cursor-pointer !bg-[#42d383]"
                    } !rounded absolute bottom-12 right-12`}
                onClick={
                    areCategoriesUnchanged(data?.allCategory, categories) ||
                    isAnyCategoryTitleEmpty(categories)
                        ? () => null
                        : handleEdit
                }
            >
                Save
            </div> */}
        </div>
    )
   }
   </>
  )
}

export default EditCategories