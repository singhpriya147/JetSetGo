import { EmiratesLogo } from "@/icons"
import { LufthansaLogo } from "@/icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Card = () => {
  return (
    <div className='h-48 w-[1056px] bg-white border-2 rounded-md border-green-100 p-4  flex flex-row justify-between'>
      <div className='w-3/4 flex flex-col justify-center gap-5'>
        <div className='flex flex-row gap-2'>
          <EmiratesLogo style={{ height: 50, width: 50 }} />
          <div className='w-2/5'>
            <p>Emirates AT 4334</p>
            <h3>9:45AM- 11:45PM</h3>
          </div>
          <div className='w-1/5'>
            <p>CDG-DXB</p>
            <h3>2h 10min</h3>
          </div>
          <div className='w-1/5'>
            <br></br>
            <h2>Non-stop</h2>
          </div>
        </div>

        <div className='flex flex-row gap-2'>
          <LufthansaLogo style={{ height: 50, width: 50 }} />
          <div className='w-2/5'>
            <p>Emirates AT 4334</p>
            <h3>9:45AM- 11:45PM</h3>
          </div>
          <div className='w-1/5  pl-2'>
            <p>DXB-CDG</p>
            <h3>4h 10min</h3>
          </div>
          <div className='w-1/5  pl-2'>
            <p>6h 32m in Lisbon</p>
            <h3>2 stops</h3>
          </div>
        </div>
      </div>
      <Separator orientation='vertical' />
      <div className='w-1/5 flex items-end'>
        <div className="flex flex-col items-start">
          <span>from</span>
          <h2>AED 2,456.90</h2>
          <Button style={{ background: '#003E39', width: '150px' }}>
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card