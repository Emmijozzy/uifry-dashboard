// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie } from '@nivo/pie'
import pieData from '../../constant/pieData'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const HalfPieChart = ({ /* see data tab */ }: any) => {

  return(
    <div className='w-full h-full flex flex-col justify-around'>
        <div className='w-full h-[230px] relative'>
          <ResponsivePie
            data={pieData}
            margin={{ top: 0, right: 6, bottom: -20, left: 6 }}
            startAngle={90}
            endAngle={-90}
            innerRadius={0.60}
            cornerRadius={6}
            activeOuterRadiusOffset={8}
            borderWidth={0}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            arcLinkLabelsThickness={0}
            colors={['#3A3A5A','#64CFF6','#6359E9', ]}
            arcLabelsSkipAngle={0}
            legends={[ ]}
          />
          <div className='absolute left-[45%] bottom-[15%] text-2xl'>75%</div>
        </div>
      <div className='h-[40px] flex items-center justify-between px-4 md:mt-0 lg:mt-[-20px] '>
        <div className='w-[50%]'>
          <div className='h-full flex space-x-2 items-center'>
            <div className='bg-primary h-[10px] w-[10px] rounded-full'></div>
            <p className='text-xs text-lighttext2 dark:text-darktext2'>Daily Payment</p>
          </div>
          <p className='text-sm'>55%</p>
        </div>
        <div>
          <div className='h-full flex space-x-2 items-center'>
            <div className='bg-secondary h-[10px] w-[10px] rounded-full'></div>
            <p className='text-xs text-lighttext2 dark:text-darktext2'>Hobby</p>
          </div>
          <p className='text-sm'>20%</p>
        </div>
      </div>
    </div>
  )
}


export default HalfPieChart