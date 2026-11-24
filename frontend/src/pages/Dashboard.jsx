import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div className="brand-inline"><span className="brand-mark small">V</span><strong>VitalSync</strong></div>
        <button className="secondary-button" onClick={logout}>Logout</button>
      </header>
      <section className="dashboard-content">
        <p className="eyebrow">YOUR HEALTHCARE WORKSPACE</p>
        <h1>Welcome, {user?.name}</h1>
        <p className="subtext">You are signed in to VitalSync.</p>
        <div className="info-card">
          <h2>Account details</h2>
          <dl>
            <div><dt>Name</dt><dd>{user?.name}</dd></div>
            <div><dt>Email</dt><dd>{user?.email}</dd></div>
            <div><dt>Role</dt><dd className="role-tag">{user?.role}</dd></div>
            <div><dt>User ID</dt><dd>{user?.id}</dd></div>
          </dl>
        </div>
        <p className="notice">Sprint 14 MVP: authentication and protected dashboard are connected. Healthcare modules will be added in later development phases.</p>
      </section>
    </main>
  );
}
