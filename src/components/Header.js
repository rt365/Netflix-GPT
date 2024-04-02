import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleClickSignOut = () => {
        signOut(auth).then(() => {
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, password, displayName, photoURL} = user;
              dispatch(addUser({
                uid: uid,
                email: email,
                password: password,
                displayName: displayName,
                photoURL: photoURL
              }));
              navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
          });

         return () => {
            unsubscribe();
          }
    },[]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-40'
        src= {LOGO}
        alt='logo'
        />
        {
            user &&   <div className='flex p-2'>
            <img className='w-10 h-10' alt='user logo' src={user.photoURL}/>
            <button onClick={handleClickSignOut} className='font-bold text-white cursor-pointer'>Sign out</button>
        </div>
        }
    </div>
  )
}

export default Header