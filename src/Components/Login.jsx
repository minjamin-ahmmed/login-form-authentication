import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {

  const navigate = useNavigate()
  const { signInUser } = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        event.target.reset()
        navigate("/orders")
      })

      .catch(error => {
        console.log("ERROR", error.message)
      })

  }


  return (
    <div className="hero bg-base-200 p-10">
      <div className="hero-content flex-col w-96">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1>

        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">

          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p className="px-8 pb-6">New Here? Please <span className="text-blue-500 "> <Link to="/register">Register</Link></span> first</p>


        </div>
      </div>
    </div>
  );
};

export default Login;