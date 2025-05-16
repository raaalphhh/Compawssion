
function AdminNavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Admin Panel</div>
      <button
        className="logout-btn"
        onClick={() => {
          window.location.href = 'https://compawssion-1.onrender.com';
        }}
      >
        Logout
      </button>
    </nav>
  );
}

export default AdminNavBar;
