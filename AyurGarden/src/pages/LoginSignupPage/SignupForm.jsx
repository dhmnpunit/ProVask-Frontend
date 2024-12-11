import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputField } from './InputField';

const SignupForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-login-signup-form p-8 bg-white border rounded-xl border-gray-300 shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-accent font-bold text-3xl">Create an Account</h1>
        <p className="text-gray-500 mt-4">Join AyurGarden and start your herbal journey</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="First Name"
          type="text"
          placeholder="John"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          label="Last Name"
          type="text"
          placeholder="Doe"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
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

      <button
        type="submit"
        className="w-full bg-accent text-white py-2 rounded-md hover:bg-green-800 transition-colors mt-6"
      >
        Sign up
      </button>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <span
            className="text-accent font-bold underline hover:text-green-800 cursor-pointer"
            onClick={toggleForm}
          >
            Login!
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;