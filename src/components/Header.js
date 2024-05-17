import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { togglrGptSearchView } from "../utils/gptSlice";
import { updateCurrentLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleClickSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(togglrGptSearchView());
  };

  const handleOnChangeLanguage = (e) => {
    dispatch(updateCurrentLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-40 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
         {showGptSearch && <select className="p-2 bg-gray-900 text-white m-2" onChange={handleOnChangeLanguage}>
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>}
          <button
            className="mx-4 my-2 py-2 px-4 bg-purple-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? 'Home Page' : 'GPT Search'}
          </button>
          <img className="w-10 h-10" alt="user logo" src={user.photoURL} />
          <button
            onClick={handleClickSignOut}
            className="font-bold text-white cursor-pointer"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
