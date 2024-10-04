import { LeftArrow } from "@/icons";
import { LufthansaLogo } from "@/icons";
const status = [
  {
    day: 'Sat 28 Sept 2:15',
    code:'DXB',
    aiportName: 'Dubai Internationa Airport',
    layover:'',
  },
  {
    day: 'Sat 28 Sept 2:15',
    code:'RUH',
    aiportName: 'King Khalid International Airport',
    layover:'Layover 2h 25m'
  },
  
  {
    day: 'Sat 28 Sept 2:15',
    code:'RUH',
    aiportName: 'King Khalid International Airport',
    layover:''
  },
  {
    day: 'Sat 28 Sept 2:15',
    code:'CDG',
    aiportName: 'Paris-charles de Gualle Airport',
    layover:''
  },
];

 type Props={
  detail:boolean | null ,
  setdetail:(detail:boolean)=>void

 }

const FlightDetail: React.FC<Props> = ({ detail, setdetail }) => {
  return (
    <div className='w-[600px] h-[550px] bg-white border-2 border-green-50 absolute right-0 m-4 rounded-md p-3'>
      <div className='h-24 border-b-2 p-3'>
        <LeftArrow height={50} weight={50} onClick={() => setdetail(!detail)} />
        <span>Flight Detail</span>
      </div>
      {/* ToDo : flex flex -row */}
      <div className='flex flex-row'>
        <div className='pt-5'>
          {/* stepper  */}
          {status.map((item) => (
            <div className='flex flex-row gap-3'>
              <div className=' flex flex-col justify-center items-center'>
                <div className='h-[15px] w-[15px] border-2 border-black rounded-full'></div>
                {/*  if layover is not empty sring then added dotted line instead of solid  line  */}

                <div
                  className={` ${
                    item.layover
                      ? 'border-l-2 border-dashed border-grey-400 h-[100px]'
                      : 'bg-black w-[2px] h-[50px]'
                  }`}
                ></div>
              </div>

              <div>
                <span className='text-sm'>{item.day}</span>
                <div className='flex flex-col gap-2'>
                  <h2>
                    {item.code} &#8226; {item.aiportName}
                  </h2>
                  {item.layover && (
                    <p className='text-gray-500'>{item.layover}</p>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div></div>
          <div></div>
        </div>

        <div className='h-[200px] w-[200px] flex flex-col pt-5 items-end gap-24'>
          <div className='flex flex-row gap-3'>
            <LufthansaLogo style={{ height: 50, width: 50 }} />

            <div className='text-sm'>
              <p>Saudi Arabian Airlines &#8226; SV553</p>
              <p>Economy &#8226; A330</p>
              <p>Flight time 3h 45m</p>
            </div>
          </div>
          <div className='flex flex-row gap-3'>
            <LufthansaLogo style={{ height: 50, width: 50 }} />

            <div className='text-sm'>
              <p>Saudi Arabian Airlines &#8226; V553</p>
              <p>Economy &#8226; A330</p>
              <p>Flight time 3h 45m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail