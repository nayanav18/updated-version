import "./styles/theme.css";
 
function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <div>
            <div className="brand-name">Analytics AI</div>
            <div className="brand-subtitle">Enterprise Analytics</div>
          </div>
        </div>
 
        <button className="new-chat">
          <span>＋</span>
          New Chat
        </button>
 
        <nav className="navigation">
          <div className="nav-section-title">WORKSPACE</div>
 
          <button className="nav-item active">
            <span>◈</span>
            Conversations
          </button>
 
          <button className="nav-item">
            <span>▦</span>
            Dashboards
          </button>
 
          <button className="nav-item">
            <span>☆</span>
            Saved
          </button>
 
          <div className="nav-section-title">SYSTEM</div>
 
          <button className="nav-item">
            <span>⚙</span>
            Settings
          </button>
        </nav>
 
        <div className="sidebar-bottom">
          <div className="ai-status">
            <span className="status-dot"></span>
            AI Assistant Online
          </div>
        </div>
      </aside>
 
      {/* Main content */}
      <main className="main-content">
        <header className="header">
          <div>
            <div className="page-title">New Conversation</div>
            <div className="page-subtitle">
              Ask questions about your business data
            </div>
          </div>
 
          <div className="header-right">
            <div className="business-badge">
              <span>●</span>
              Enterprise
            </div>
 
            <div className="profile">
              <div className="profile-avatar">NV</div>
              <div>
                <div className="profile-name">User</div>
                <div className="profile-role">Analyst</div>
              </div>
            </div>
          </div>
        </header>
 
        {/* Conversation */}
        <section className="conversation">
          <div className="welcome">
            <div className="welcome-icon">✦</div>
 
            <h1>How can I help with your data?</h1>
 
            <p>
              Ask a business question, explore your data, or create a
              visualization when you need one.
            </p>
 
            <div className="suggestions">
              <button>What can you do?</button>
              <button>Show me my sales trends</button>
              <button>What was total revenue last year?</button>
              <button>Show revenue by region</button>
            </div>
          </div>
        </section>
 
        {/* Chat input */}
        <div className="chat-area">
          <div className="chat-input-wrapper">
            <textarea
              placeholder="Ask Analytics AI..."
              rows="1"
            />
 
            <button className="send-button">
              ➤
            </button>
          </div>
 
          <div className="input-hint">
            Analytics AI can analyze your business data and create
            visualizations when requested.
          </div>
        </div>
      </main>
    </div>
  );
}
 
export default App;
