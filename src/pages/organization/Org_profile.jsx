import React from 'react'
import { Link2,Building2,MapPin,Mails} from 'lucide-react'
const Org_profile = () => {
  return (
    <div className='py-6 px-10 transition-all'>
      <div className='flex flex-col transition-all'>
        <div className='relative w-full z-[-1] transition-all'>
          <div className='w-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <img src="https://media.licdn.com/dms/image/C561BAQEUvTgqGNQ1Bw/company-background_10000/0/1584058343018/teamdevsquad_cover?e=1702810800&v=beta&t=lhwn1iywLfbR-kTJ71MILYBUT_DAAHQEqYJLdP_ea4Y"
            className='bg-center bg-no-repeat bg-cover rounded-md w-full' />
          </div>
          <div className='absolute left-24 custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow'>
            <img src="https://media.licdn.com/dms/image/C4E0BAQE7qVTIeVgtvw/company-logo_200_200/0/1631301745245?e=1710374400&v=beta&t=KVak-Ed0TIlUtXro8XaHraA71DkBHJ1ta8nojel5AEk" className='w-32 h-32 rounded-md' />
          </div>
          <div className='flex max-w-xs absolute -right-32 custom-position-center bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow-xl hover:custom-border transition-all'>
            <div className='flex flex-col px-3 py-2'>
                <div className='text-[10px] pb-0 mb-0'>Created by</div>
                <div className='py-2 pt-0 flex gap-x-2'>
                    <div className='min-w-[2.5rem] min-h-[2.5rem] mt-1'><img src="https://avatars.githubusercontent.com/u/77003390?v=4" className='w-12 h-10 rounded-lg bg-center bg-no-repeat bg-cover' /></div>
                    <div className='flex flex-col'>
                        <div>Abdullah Sajid</div>
                        <div className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi itaque, nisi ea nam nihil minima id quod iusto adipisci facere eaque esse vitae praesentium temporibus facilis. Sed, saepe? Veritatis, dolore.</div>
                    </div>
                </div>
              <div className='text-lg font-semibold'>Bio</div>
              <div className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi itaque</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 mt-20 ml-7'>
          <div className='flex text-2xl font-semibold'>
            Dev Squad
          </div>
          <div className='flex w-96 flex-wrap gap-3 '>
            <div className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><Building2 size={15} /></span>
                <span>Software Development</span>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><MapPin size={15} /></span>
                <span>Islamabad,Pakistan</span>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><Mails size={15} /></span>
                <span>devsquad@gmail.com</span>
            </div>
            <a href='https://devsquad-woad.vercel.app/' className='flex flex-row justify-center items-center gap-x-2 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow px-2 py-1 text-sm custom-border'>
                <span><Link2 size={15}/></span>
                <span>https://devsquad-woad.vercel.app/</span>
            </a>
         
          </div>
        </div>

        <div className='flex gap-x-3'>
          <div className='flex w-3/5 mt-5 ml-7 bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] hover:custom-border shadow relative z-[100]'>
            <div className='flex flex-col gap-y-2 px-3 py-2'>
              <div className='text-base font-semibold'>About</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore aut esse architecto. Saepe modi nemo facilis id nostrum consectetur, excepturi omnis ab quasi voluptatem illo suscipit voluptate voluptatum laborum, earum vero assumenda ipsum quis qui eligendi! Corrupti voluptatem facilis aliquid libero at ad pariatur voluptatum. Quo atque quibusdam nesciunt ad?</div>
            </div>
          </div>

          <div className='flex flex-col px-3 py-2 gap-y-2 mt-5 h-full bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7] shadow hover:custom-border relative z-[100]'>
            <div className=' text-1xl font-semibold'>Social Links</div>
            <a href='https://www.linkedin.com/in/aabdullahsajid/' className='flex items-center gap-x-2'>
              <div>
                <Link2 size={20}/>
              </div>
              <div>
                https://www.linkedin.com/in/aabdullahsajid/ 
              </div>
            </a>
            <a href='https://twitter.com/aabdullahsajid' className='flex items-center gap-x-2'>
              <div>
                <Link2 size={20}/>
              </div>
              <div>
                https://twitter.com/aabdullahsajid 
              </div>
            </a>
            <a href='https://www.linkedin.com/in/aabdullahsajid/' className='flex items-center gap-x-2'>
              <div>
                <Link2 size={20}/>
              </div>
              <div>
                https://www.linkedin.com/in/aabdullahsajid/ 
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Org_profile
