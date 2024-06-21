import { useGetHeroDataQuery } from '../../../../redux/features/layout/layoutApi'
import React from 'react'

type Props = {}

const EditFaq = (props: Props) => {

    const {data,isLoading} = useGetHeroDataQuery("faq",{
        refetchOnMountOrArgChange:true
    });
    console.log("Faq is ",data)
  return (
    <div>EditFaq</div>
  )
}

export default EditFaq