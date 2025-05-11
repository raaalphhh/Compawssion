
function AdminNavBar() {


  return (
    <nav className="navbar">
      <div className="navbar-brand">Admin Panel</div>
      <h3 className='logout-btn' onClick={() => (window.location.reload())}>Logout</h3>
    </nav>
  );
}

export default AdminNavBar;
