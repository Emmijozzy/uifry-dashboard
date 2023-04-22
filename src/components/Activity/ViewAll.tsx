import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import EastIcon from '@mui/icons-material/East'

type Props = {}

const ViewAll = (props: Props) => {
  return (
    <div className='w-full h-10 flex justify-center items-center'>
      <button className='h-full w-full border-solid border-[2px] dark:border-[#8C89B4] border-lighttext2 rounded-lg text-sm flex justify-center items-center'><span>View all activity</span><CgArrowLongRight className='ml-8 w-6 h-10' />  </button>
    </div>
  )
}

export default ViewAll