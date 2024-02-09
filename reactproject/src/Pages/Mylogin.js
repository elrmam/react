import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Mylogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailErr: '',
    passwordErr: '',
  });

  const [passtype, setpasstype] = useState(false);

  const converting = () => {
    setpasstype((prevpasstype) => !prevpasstype);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedUserData &&
      storedUserData.email === data.email &&
      storedUserData.password === data.password
    ) {
      dispatch({
        type: 'LOGIN',
        payload: {
          name: storedUserData.name,
          email: storedUserData.email,
        },
      });


      history.push('/');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };


  if (isAuthenticated) {
    history.push('/');
  }

  return (
    <div className="container border border-secondary rounded-3 my-3">
      <form onSubmit={handleLogin}>
        <div className="row my-3">
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email Adress
            </label>
            <input
              type="email"
              className="form-control"
              required
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
            />
            <p className="text-danger">{errors.emailErr}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type={passtype ? 'text' : 'password'}
              className="form-control"
              required
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              name="password"
            />
            <p className="text-danger">{errors.passwordErr}</p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <button type="submit" className="btn btn-primary form-control">
              Sign in
            </button>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12">
            <button
              type="button"
              className="btn btn-info form-control"
              onClick={converting}
            >
              {passtype ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Mylogin;
