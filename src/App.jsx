import "./App.css";

function App() {
  return (
    <div className="Container">
      <img src="/image/Photo.png" alt="" className="image" />
      <div className="RightText">
        <div className="Heading">
          <div className="firstLine">Gateway to Global Careers</div>
          <div className="secondLine">
            Apply From Anywhere, Achieve Everywhere!
          </div>
        </div>
        <div className="paragraph">
          Explore international job opportunities and unlock your potential in
          Poland, a vibrant destination for global success. We connect talented
          professionals from around the world to limitless opportunities, making
          us the gateway to your career achievements.
        </div>
        <div className="Lists">
          <div className="listItems">✔ Easy Process</div>
          <div className="listItems">✔ Cultural Diversity</div>
          <div className="listItems">✔ Quality Of Work Environment</div>
        </div>
        <button className="button">Apply Now →</button>
      </div>
    </div>
  );
}

export default App;
