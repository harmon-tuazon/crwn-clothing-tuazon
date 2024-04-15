import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

import { UserContext } from '../../contexts/user-context';
import { DropDownContext } from '../../contexts/dropdown-context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import  CrwnLogo  from '../../assets/crown.svg?react';
import './navigation.styles.scss';

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { isActive } = useContext(DropDownContext);

  
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

          <CartIcon/>
        </div>
          {isActive && <CartDropdown/>}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
