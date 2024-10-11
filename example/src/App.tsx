import SkeletonLoader from "react-shade-loader";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Shade Loader Example</h1>

      <h2>Shimmer Effect</h2>
      <SkeletonLoader width="200px" height="20px" />
      <SkeletonLoader width="100%" height="50px" borderRadius="8px" />
      <SkeletonLoader width="100px" height="100px" isCircle />

      <h2>Pulse Effect</h2>
      <SkeletonLoader width="200px" height="20px" pulse />
      <SkeletonLoader width="100%" height="50px" borderRadius="8px" pulse />
      <SkeletonLoader width="100px" height="100px" isCircle pulse />
    </div>
  );
}

export default App;
