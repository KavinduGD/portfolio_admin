import "./App.css";

function App() {
  return (
    <>
      {/* create a still construction block */}
      <div>
        <div className="construction-container">
          <div className="construction-content">
            <h1>🚧 Under Construction</h1>
            <p>This site is still in development.</p>
            <p>We'll be back soon with something amazing!</p>
          </div>
        </div>
      </div>
      <style>{`
    .construction-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Arial', sans-serif;
    }
    .construction-content {
      text-align: center;
      background: white;
      padding: 60px 40px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 500px;
    }
    .construction-content h1 {
      font-size: 48px;
      margin: 0 0 20px 0;
      color: #333;
    }
    .construction-content p {
      font-size: 18px;
      color: #666;
      margin: 10px 0;
      line-height: 1.6;
    }
  `}</style>
    </>
  );
}

export default App;
