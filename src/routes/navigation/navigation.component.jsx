import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user-context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import  CrwnLogo  from '../../assets/crown.svg?react';
import './navigation.styles.scss';

const Navigation = () => {
  const { user } = useContext(UserContext);

  
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          { !user ? 
            (<Link className='nav-link' to='/auth'>
            SIGN IN 
            </Link> )
          : (<Link className='nav-link' onClick={signOutUser}>
            SIGN OUT 
            </Link> )
          }
          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
