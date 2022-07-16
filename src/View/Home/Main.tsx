import React from "react";
import "./Main.css";

const HomeMain: React.FC<{
  devices?: Array<Object>;
  logout: () => void;
  notify: () => void;
}> = ({ devices, logout, notify }) => {
  const deviceLength = devices?.length || 0;

  return (
    <main className="home-main">
      <section className="device-section">
        <div className="content">
          {deviceLength}
          <span className="details">devices</span>
          <span className="details">online</span>
        </div>
        {devices?.map((i, index) => (
          <div
            key={index}
            className={
              index < 4
                ? "first-part"
                : index > 2 && index < 7
                ? "second-part"
                : "third-part"
            }
          >
            <span className="circle"></span>
          </div>
        ))}
      </section>
      <footer>
        <div className="footer-button">
          <button onClick={() => notify()}>notify</button>
          <button onClick={() => logout()}>logout</button>
        </div>
      </footer>
    </main>
  );
};

export default HomeMain;
