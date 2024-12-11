import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InputField = ({ label, type, placeholder, value, onChange, name }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);

const LoginForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-login-signup-form p-8 bg-white border rounded-xl border-gray-300 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-accent font-bold text-3xl">Welcome Back</h1>
        <p className="text-gray-500 mt-4">Login to your AyurGarden account</p>
      </div>

      <InputField
        label="Email"
        type="email"
        placeholder="john@example.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <div className="flex items-center justify-between mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>
        <Link to="/forgot-password" className="text-sm text-accent hover:underline">
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-white py-2 rounded-md hover:bg-green-800 transition-colors"
      >
        Login
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <span
            className="text-accent font-bold underline hover:text-green-800 cursor-pointer"
            onClick={toggleForm}
          >
            Signup!
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
