import React from 'react'
import transactionIcons from '../../assets/images/transactions'
import tableBody from '../../constant/tableBody'

type Props = {}

const TableBody = (props: Props) => {
  return (
    <div className='w-full h-full flex-1 overflow-auto'>
      <div className='flex w-full h-full overflow-auto'>
       <table className='w-full min-w-[36rem] h-full table-fixed border-collapse'>
        <thead className='h-16 w-full text-lighttext2 text-sm dark:text-darktext2'>
          <tr className=''>
            <th className='text-left pl-3 min-w-[8em] w-52'>
              Name
            </th>
            <th className='text-left'>
              Date
            </th>
            <th className='text-left'>
              Amount
            </th>
            <th className='text-left'>
              Status
            </th>
          </tr>
        </thead>
        <tbody className='h-[100px] w-[100vw]'>
          {
            tableBody.map((tableData, i)=> (
              <tr className=' table-row'>
                <td className='flex space-x-2 items-center h-20 '>
                  <div className='h-10 w-10 flex items-center justify-center border-solid border-2 bordser-white rounded-full'>
                   <img src={tableData.icon} />
                  </div>
                  <p>{tableData.name} </p>
                </td>
                <td className='table-cell'>{tableData.Date}</td>
                <td className='table-cell'>{`$${tableData.amount}`}</td>
                <td className='table-cell'>
                  <div className=' w-28 h-6 flex items-center justify-center dark:bg-darksuccessbg bg-lightsuccessbg text-lightsuccess dark:text-darksuccess font-medium text-lg px-3 py-1 rounded-lg'>{tableData.transaction}</div>
                </td>
              </tr>
            ))
          }
        </tbody>
       </table>
      </div>
    </div>
  )
}

export default TableBody