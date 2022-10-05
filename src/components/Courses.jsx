import { v4 as uuid } from 'uuid';
import {BsFillCartDashFill} from 'react-icons/bs'
import { coursesData } from '../data';
import Button from './Button';

const Courses = () => {
  return (
    <section className='py-14 md:py-16 flex flex-col'>
      <div className='flex items-center justify-between mb-12'>
        <h2 className='font-bold text-3xl text-headingText sm:w-[70%] md:w-[60%] lg:w-[40%]'>
          How our online public school works
        </h2>
        <Button
          text='View all courses'
          classes='border-2 border-blue hidden md:block whitespace-nowrap text-blue'
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
        {coursesData.map((cd) => (
          <div key={uuid()} className=''>
            <img src={cd.imgUrl} alt='course' className='w-full' />
            <h4 className='font-medium text-xl text-headingText mt-4 mb-6'>
              {cd.heading}
            </h4>
            <div className='flex items-center gap-12'>
              <div className='flex items-center gap-2'>
                <img src={cd.icon1} alt='2 persons' />
                <span>{cd.icon1Text}</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={cd.icon2} alt='clock' />
                <span>{cd.icon2Text}</span>
              </div>
            </div>
            <button
              className={`mt-5 flex items-center justify-center gap-3 w-full px-6 py-3 rounded-md outline-none ${
                cd.btnType === 'outlineBtn'
                  ? 'border border-blue bg-transparent text-blue'
                  : 'bg-blue text-white'
              }`}
            >
              <BsFillCartDashFill
                className={`${
                  cd.btnType === 'outlineBtn' ? 'text-blue' : 'text-white'
                }`}
              />
              <span>Add to cart</span>
            </button>
          </div>
        ))}
      </div>
      <Button
        text='View all courses'
        classes='border-2 border-blue block md:hidden whitespace-nowrap text-blue self-center mt-16'
      />
    </section>
  );
};
export default Courses;
