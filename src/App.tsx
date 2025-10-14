import { useRoutes } from "react-router-dom";
import "./assets/styles/index.css";
import routes from "./router/router";

function App() {
  const content = useRoutes(routes);
  return (
    <>
    {content}
    </>
  )
}

export default App
