import headerimg from '../assets/jj.svg'
import { Button } from './'

const Intro = () => {
    return (
      <section className='pt-10 md:pt-16 pb-16 md:pb-20 flex flex-col lg:flex-row lg:items-center gap-y-10 sm:gap-y-16 w-full'>
        <div className='space-y-5 md:space-y-6 sm:text-center lg:text-left lg:w-[40%]'>
          <h1 className='text-4xl lg:text-5xl font-bold text-headingText lg:leading-snug'>
            Discover best classes for the best learning
          </h1>
          <p className='leading-relaxed sm:w-[85%] mx-auto lg:w-full'>
            We designed Connections Academy to give students all across the
            nation a tuition-free online public school that lets them learn.
          </p>
          <Button
            text='Get Started'
            bg='bg-tomato'
            textColor='text-white'
            classes=''
          />
          <p className=''>
            Not sure when to start?{' '}
            <span className='text-blue'>Learn more</span>
          </p>
        </div>
        <figure className='lg:w-[60%] flex items-end justify-end'>
          <img src={headerimg} alt='' className='w-fit object-contain' />
        </figure>
      </section>
    );
}
export default Intro