import Stories from "./components/Stories";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="app-container">
        <div className="background-image">
          <div className="overlay">
            <h1>Shared Stories</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="stories">
        <Stories heading="Stories" />
      </div>
      <div className="content">
        <Content />
      </div>
    </>
  );
}

export default App;
