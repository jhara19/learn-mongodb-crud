import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {GoogleAuthProvider} from 'firebase/auth'
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";

const Signup = () => {
   const {createUser, googleSignIn} = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    //const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    //console.log(email,password);
    createUser(email,password)
    .then(result => {
        const user = result.user;
        console.log(user)
    })
    .catch(error => console.error(error))
   }

//GOOGLE SIGN IN
const googleProvider = new GoogleAuthProvider();
const handleGoogleSignin = () => {
  googleSignIn(googleProvider)
  .then(result => {
    const user = result.user;
    console.log(user);
  })
  .catch(err => console.error(err))
}

  return (
    <div className="hero w-full my-20">
  <div className="hero-content grid gap-28 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
      <img src={login} className='w-3/4' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl font-bold text-center">Signup now!</h1>
      <form onSubmit={handleSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
         
        </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value='Sign Up'/>
        </div>
      </form>
      <div className="text-center mb-3">
          <button onClick={ handleGoogleSignin} className="btn btn-outline btn-error btn-circle mr-2">< FaGoogle></ FaGoogle></button>
          <button className="btn btn-outline btn-primary btn-circle mr-2"><FaFacebook></FaFacebook></button>
          <button className="btn btn-outline btn-dark btn-circle"><FaGithub></FaGithub></button>
         
      </div>
        
      <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold text-center' to='/login'>Login</Link></p>

    </div>
  </div>
</div>
  );
};

export default Signup;