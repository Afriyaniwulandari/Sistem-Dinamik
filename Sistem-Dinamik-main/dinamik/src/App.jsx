import { useState } from 'react'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%', positive: true },
    { title: 'Revenue', value: '$45,678', change: '+8%', positive: true },
    { title: 'Orders', value: '89', change: '-3%', positive: false },
    { title: 'Active Now', value: '56', change: '+15%', positive: true },
  ]

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', amount: '$120.00', status: 'Completed' },
    { id: '#ORD-002', customer: 'Jane Smith', amount: '$85.50', status: 'Processing' },
    { id: '#ORD-003', customer: 'Bob Johnson', amount: '$230.00', status: 'Pending' },
    { id: '#ORD-004', customer: 'Alice Brown', amount: '$45.00', status: 'Completed' },
  ]

  return (
    <div className="dashboard">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">Dashboard</a>
          <a href="#" className="nav-item">Analytics</a>
          <a href="#" className="nav-item">Orders</a>
          <a href="#" className="nav-item">Products</a>
          <a href="#" className="nav-item">Customers</a>
          <a href="#" className="nav-item">Settings</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="user-info">
            <span>Admin</span>
            <div className="avatar">A</div>
          </div>
        </header>

        <div className="content">
          <h1>Welcome Back!</h1>
          <p className="subtitle">Here's what's happening with your store today.</p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-title">{stat.title}</div>
                <div className="stat-value">{stat.value}</div>
                <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App