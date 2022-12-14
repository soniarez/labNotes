import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/Dark.png';
import { AuthContext } from '../context/AuthContext.jsx';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/init';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const Login = () => {
  
  const { email, password, handleEmailInput, handlePasswordInput } = useContext(AuthContext);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const handleLogin = async () => {
     try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('userUid', auth.currentUser.uid);
      navigate('/home');
      return cred;
     } catch (error) {
      if (error.code === 'auth/invalid-email') {
        MySwal.fire({
          title: <strong>Invalid email. Please enter a valid format: "example@gmail.com"</strong>,
          icon: 'error',
        });
      } else if (error.code === 'auth/missing-email') {
        MySwal.fire({
          title: <strong>Please enter your email.</strong>,
          icon: 'error',
        });
      } else if (error.code === 'auth/internal-error') {
        MySwal.fire({
          title: <strong>Oops, something went wrong on our side! Please try again later.</strong>,
          icon: 'error',
        });
      } else if (error.code === 'auth/wrong-password') {
        MySwal.fire({
          title: <strong>Wrong password. Please try again.</strong>,
          icon: 'error',
        });
      } else if (error.code === 'auth/user-not-found') {
        MySwal.fire({
          title: <strong>User not found. Try signing up instead.</strong>,
          icon: 'error',
        });
      }
     }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen dark:bg-gray-800">
      <div className="flex flex-col items-center justify-around w-1/4 h-3/5 dark:bg-gray-900 rounded-3xl text-white min-w-[350px]">
        <div className="flex flex-col justify-center items-center">
        <img src={Logo} className="w-24 h-24" />
        <h1 className="text-4xl font-semibold text-white">LabNotes</h1>
        </div>
        <form>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              onBlur={handleEmailInput}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-[250px] appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onBlur={handlePasswordInput}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </form>
        <button
          onClick={handleLogin}
          className="w-[250px] h-10 bg-[#00C2CB] font-semibold text-lg rounded-xl"
          type="submit"
        >
          Sign in
        </button>
        <p className="pb-4">Don't have an account? <Link to="/register" className="text-[#00C2CB] hover:underline">Sign Up  </Link></p>
      </div>
    </div>
  );
};

export default Login;
