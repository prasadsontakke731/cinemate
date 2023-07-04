import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2030{' '}
        <Link to='/' className='hover:underline'>
          Cinemate
        </Link>
        . All Rights Reserved.
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <a
            href='https://www.instagram.com/prasadsontakke45/'
            target='_blank'
            ref='noreferrer'
            className='mr-4 hover:underline md:mr-6 '
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/prasad-sontakke-676814205/'
            target='_blank'
            ref='noreferrer'
            className='mr-4 hover:underline md:mr-6'
          >
            Linked In
          </a>
        </li>
        <li>
          <a
            href='https://github.com/prasadsontakke77'
            target='_blank'
            ref='noreferrer'
            className='mr-4 hover:underline md:mr-6'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/prasad.sontakke.3705'
            target='_blank'
            ref='noreferrer'
            className='hover:underline'
          >
            Facebook
          </a>
        </li>
      </ul>
    </footer>
  );
};
