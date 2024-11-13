
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {


  const navigate = useNavigate()
  const { userContext } = useContext(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value
    const name = event.target.name.value

    console.log(email, password, name);


    //Create User
    userContext(email, password)
      .then(result => {
        console.log(result.user);
        event.target.reset()
        navigate("/login")

      })
      .catch(error => {
        console.log("ERRROR!!", error.message);

      })


  }

  return (
    <div className="hero bg-base-200 p-10">

      <div className="hero-content w-96 flex-col">

        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Register now!</h1>
        </div>

        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">

          <form onSubmit={handleRegister} className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" name="name" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>

          </form>

          <p className="px-8 pb-6">Already Have an Account? <span className="text-blue-600 font-bold"> <Link to="/login">Login</Link></span></p>

        </div>
      </div>
    </div>
  );
};

export default Register;