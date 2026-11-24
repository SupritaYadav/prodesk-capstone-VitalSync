import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { apiRequest } from '../api';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { token, saveSession } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
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
      const data = await apiRequest('/auth/login', {
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
        <h1>Welcome back</h1>
        <p className="subtext">Sign in to continue to your account.</p>
        <form onSubmit={submit}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={update} placeholder="you@example.com" required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password"
            value={form.password} onChange={update} placeholder="Enter your password" required />
          {error && <p className="error" role="alert">{error}</p>}
          <button disabled={loading}>{loading ? 'Signing in...' : 'Login'}</button>
        </form>
        <p className="switch-link">New to VitalSync? <Link to="/register">Create an account</Link></p>
      </section>
    </main>
  );
}
