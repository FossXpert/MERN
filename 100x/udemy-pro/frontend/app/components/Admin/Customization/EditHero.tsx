import { AiOutlineCamera } from 'react-icons/ai';
import { useEditLayoutMutation, useGetHeroDataQuery } from '../../../../redux/features/layout/layoutApi';
import React, { useEffect,FC, useState } from 'react'
import { styles } from '@/app/styles/style';
import toast from 'react-hot-toast';

type Props = {

}

const EditHero:FC<Props> = ({}) => {

    const [image,setImage] = useState("");
    const [title,setTitle] = useState("");
    const [subtitle,setSubtitle] = useState("");

    const {data,refetch} = useGetHeroDataQuery("banner",{
        refetchOnMountOrArgChange: true,
    });

    const [editLayout,{isLoading,isSuccess,data:editLayoutData,error}] = useEditLayoutMutation()
    useEffect(()=>{
        if(data){
            setTitle(data.layout.banner.title);
            setSubtitle(data.layout.banner.subtitle);
            setImage(data.layout.banner.image.url);
        }
        if(isSuccess){
            refetch();
            toast.success("edit successfully");
        }
        if(error){
            if("data" in error){
                const errorData = error as any;
                toast.error(errorData.data.message);
            }
        }
    },[data,isSuccess,error]);

    const handleUpdate = (e:any)=>{
        e.preventdefault()
        const file = e.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onload = (e:any) =>{
                if(reader.readyState === 2){
                    setImage(e.target.value as string);
                }
            };
            reader.readAsDataURL(file);
        }

    }

    const handleEdit = async() => {
        await editLayout({
            type: "banner",
            image,title,subtitle
        })
    }
  return (
    <>
    <div className='w-full 1000px:flex items-center'>
    <div className='absolute top=[100px] 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px] 1100px:h-[500px] 
    1100px:w-[500px] h-[50vh] w-[50vh] rounded-[50%] 1100px:left-[18rem] 1500px:left-[21rem]'>
    <div className='relative flex items-center justify-end'>
        <img
        src={image}
        alt=""
        className='object-contain 500px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]'
        />
        <input
        type="file"
        id="banner"
        accept="image/*"
        onChange={handleUpdate}
        className='hidden'
    />
    <label htmlFor='banner' className='absolute bottom-0 right-0 z-20'>
        <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer"
        /> 
    </label>
    </div>
    <div className={`${styles.input}`}>
        <textarea
        className={`dark:!text-white !text-black`}
        value={title}
        placeholder='Imporove ypur online learning exp better instantly'
        onChange={(e) => setTitle(e.target.value)}
        rows={4}
        /><br/>        
        <textarea
        className={`dark:!text-white !text-black`}
        value={title}
        placeholder='Imporove ypur online learning exp better instantly'
        onChange={(e) => setSubtitle(e.target.value)}
        rows={4}
        /><br/><br/><br/><br/>
        <div className={`${styles.button1}`}
        onClick={data.layout.banner.title !== title ||
                 data.layout.banner.subtitle !== subtitle ||
                 data.layout.banner.image.url !== image ? 
                 handleEdit : ()=>null
        }>
            Save
        </div>
    </div>  
    </div>
    </div>
    </>
  )
}

export default EditHero