import "../CSS/signup.css";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <main>
      <div className="con">
        <h1 className="up-tit">Sign Up</h1>
        <div className="small">
          <form>
            <div className="up-val">
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" />
            </div>
            <div className="up-val">
              <label htmlFor="mail">Email: </label>
              <input type="email" id="mail" />
            </div>
            <div className="up-val">
              <label htmlFor="pass">Password: </label>
              <input type="password" id="pass" />
            </div>
            <div className="up-val">
              <label htmlFor="dateof">DOB: </label>
              <input type="date" id="dateof" />
            </div>
            <div className="up-val">
              <label htmlFor="gen">Gender: </label>
              <input type="radio" id="gen" name="gen" /> Male
              <input type="radio" id="gen" name="gen" /> Female
              <input type="radio" id="gen" name="gen" /> Others
            </div>
            <div className="up-val">
              <label htmlFor="moblie">Moblie: </label>
              <input type="number" id="moblie" />
            </div>
          </form>
          <div className="login">
            <Link to="/">Login</Link>
          </div>
          <div className="long">
            <p>I have already have account?</p>
            <Link to="/signin">Signin</Link>
          </div>  
        </div>
      </div>
    </main>
  );
}

export default Signup;
