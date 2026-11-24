import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { apiRequest } from '../api';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const navigate = useNavigate();
  const { token, saveSession } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'patient' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (token) return <Navigate to="/dashboard" replace />;

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function submit(event) {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await apiRequest('/auth/register', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      saveSession(data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="brand-mark">V</div>
        <p className="eyebrow">VITALSYNC HEALTHCARE PORTAL</p>
        <h1>Create your account</h1>
        <p className="subtext">Register as a doctor or patient.</p>
        <form onSubmit={submit}>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" value={form.name} onChange={update}
            placeholder="Your full name" minLength="2" maxLength="60" required />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={update}
            placeholder="you@example.com" required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={form.password}
            onChange={update} placeholder="At least 8 characters" minLength="8" required />
          <label htmlFor="role">Account type</label>
          <select id="role" name="role" value={form.role} onChange={update}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          {error && <p className="error" role="alert">{error}</p>}
          <button disabled={loading}>{loading ? 'Creating account...' : 'Create account'}</button>
        </form>
        <p className="switch-link">Already registered? <Link to="/login">Login</Link></p>
      </section>
    </main>
  );
}
