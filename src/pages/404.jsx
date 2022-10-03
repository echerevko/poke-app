import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className='error-page'>
      <h1>404 Page Does Not Exist</h1>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default ErrorPage;
