import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ correct import

function LoginForm() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ✅ get the navigate function

  const SubmitForm = () => {
    const correctUsername = 'irahozadaniel';
    const correctPassword = 'irahoza@12';

    if (username === correctUsername && password === correctPassword) {
      setMessage('Login correct');
      navigate('/dashboard'); // ✅ use the function here
    } else {
      setMessage('Please try again');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <section className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl text-gray-800">Login</h1>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
          />

          <button
            type="button"
            onClick={SubmitForm}
            className="w-full py-3 px-4 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 active:transform active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          {message && (
            <p className="text-center mt-4 text-gray-700 font-semibold">{message}</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default LoginForm;
