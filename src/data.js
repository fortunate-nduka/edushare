import Partner1 from './assets/partner1.png';
import Partner2 from './assets/partner2.png';
import Partner3 from './assets/partner3.png';
import Partner4 from './assets/partner4.png';

import Icon1 from './assets/play-presentation.svg';
import Icon3 from './assets/notes.svg';
import Icon2 from './assets/open-book.svg';
import Icon4 from './assets/hierachy.svg';

import Course1 from './assets/course1.png';
import Course2 from './assets/course2.png';
import Course3 from './assets/course3.png';
import Persons from './assets/3Friends.svg';
import Clock from './assets/Time.svg';
import Cart from './assets/cart.svg';

export const navlinks = [
  { title: 'Home' },
  { title: 'Profile' },
  { title: 'Courses' },
  { title: 'Contact' },
];

export const partnersLogo = [
  { imgUrl: Partner1, alt: 'McGill' },
  { imgUrl: Partner2, alt: 'amity university' },
  { imgUrl: Partner3, alt: 'university of houston' },
  { imgUrl: Partner4, alt: 'university of plymouth' },
];

export const howData = [
  {
    iconUrl: Icon1,
    heading: 'Virtual Learning',
    text: 'The only costs are for standard school supplies and voluntary field trips.',
  },
  {
    iconUrl: Icon2,
    heading: 'Meaningful Education',
    text: 'Many of our Connections Academy schools have additional accreditations.',
  },
  {
    iconUrl: Icon3,
    heading: 'Online Curiculum',
    text: 'Our curriculum prepares students to go further in life by giving them support.',
  },
  {
    iconUrl: Icon4,
    heading: 'Social Interaction',
    text: 'Students at Connections Academy collaborate on projects together.',
  },
];

export const coursesData = [
  {
    imgUrl: Course1,
    heading: 'Hands-On Python & R In Data Science',
    icon1: Persons,
    icon1Text: '1,45,690',
    icon2: Clock,
    icon2Text: '4 months',
    icon3: Cart,
    buttonText: 'Add to Cart',
    btnType: 'outlineBtn',
  },
  {
    imgUrl: Course2,
    heading: 'Science and Machine Learning Bootcamp',
    icon1: Persons,
    icon1Text: '2,101,000',
    icon2: Clock,
    icon2Text: '2 months',
    icon3: Cart,
    buttonText: 'Add to Cart',
    btnType: 'bgBtn',
  },
  {
    imgUrl: Course3,
    heading: 'The Python Mega Course:Real Applications',
    icon1: Persons,
    icon1Text: '1,606,245',
    icon2: Clock,
    icon2Text: '6 months',
    icon3: Cart,
    buttonText: 'Add to Cart',
    btnType: 'outlineBtn',
  },
];
