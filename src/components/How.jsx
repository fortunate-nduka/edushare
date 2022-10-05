import { v4 as uuid } from 'uuid';
import Illustration from '../assets/how-img.png';
import { howData } from '../data';

const How = () => {
  return (
    <section className='py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:justify-between gap-y-16'>
      <div className='order-2 lg:order-1 justify-self-start lg:justify-self-center w-full'>
        <img src={Illustration} alt='' className='w-auto mx-auto lg:mx-0' />
      </div>
      <div className='grid gap-y-12 order-1 lg:order-2 flex-1'>
        <h2 className='font-bold text-4xl text-headingText w-[85%] sm:w-[60%] md:w-[50%] lg:w-[80%]'>
          How our online public school works
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-7'>
          {howData.map((hd) => (
            <div key={uuid()} className='space-y-6'>
              <figure className='bg-lightBlue p-4 rounded-lg w-fit'>
                <img src={hd.iconUrl} alt='' className='w-6 h-6' />
              </figure>
              <h4 className='font-semibold text-2xl text-headingText whitespace-nowrap'>
                {hd.heading}
              </h4>
              <p>{hd.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default How;
