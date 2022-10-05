import { v4 as uuid } from 'uuid';
import { partnersLogo } from '../data';

const Partners = () => {
  return (
    <section className='py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center sm:justify-between gap-y-10'>
      <div className='flex flex-col gap-3 w-[60%] sm:w-[90%] lg:w-full text-center lg:text-left'>
        <h2 className='font-bold text-4xl xl:text-5xl text-headingText'>
          400+
        </h2>{' '}
        Universities worldwide that partner with us
      </div>
      {partnersLogo.map((pl) => (
        <div key={uuid()} className=''>
          <img src={pl.imgUrl} alt={pl.alt} className='w-36 mx-auto sm:mx-0' />
        </div>
      ))}
    </section>
  );
};
export default Partners;
