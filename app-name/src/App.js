import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const text = "Hello world!";

  const className = "text-red-500";

  return (
    <div className={className}>
      <h1>{text}</h1>
      <Button
        onClick={() => {
          console.log("test");
        }}
        className="text-blue-500"
      >
        Click 1
      </Button>
      <Button
        onClick={() => {
          console.log("test 2");
        }}
        className="text-red-500"
      >
        Click 2
      </Button>
    </div>
  );
}

export default App;