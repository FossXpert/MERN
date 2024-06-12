import { styles } from '../../styles/style';
import React, { useState } from 'react'

type Props = {}

const ChangePassword = (props: Props) => {

    const [oildPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const passWordChangeHandler = (e:any) => {

    };


  return (
    <div className='w-full pl-7 px-2 800px:px-5 800px:pl-0'>
        <h1 className={`${styles.title}`}>
            Change Password
        </h1>
        <div className='w-full'>
            <form >

            </form>
        </div>
    </div>
  )
}

export default ChangePassword