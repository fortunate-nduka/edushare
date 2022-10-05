import { v4 as uuid } from 'uuid'
import Logo from '../assets/logo.svg'
import { HiMenu } from 'react-icons/hi'
import { navlinks } from '../data'
import Button from './Button'

const Nav = () => {
    return (
      <nav className='flex items-center justify-between py-5'>
        <img src={Logo} className='w-28 lg:w-36' alt='' />
        <ul className='hidden items-center md:flex gap-9'>
          {navlinks.map((link) => (
            <li key={uuid()} className='text-black'>
              {link.title}
            </li>
          ))}
        </ul>
        <HiMenu className='w-8 h-8 md:hidden' />
        <Button
          text='Sign in'
          classes='bg-lightBlue hidden md:block text-blue'
        />
      </nav>
    );
}
export default Nav