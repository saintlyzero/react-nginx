import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Deploy React on NGINX</h1>
      <p className="app-desc">
        This app uses React Router v6 and is deployed over a NGINX server
      </p>
      <ul>
        <li>
          <Link className="page-link" to={`/foo`}>
            Page Foo
          </Link>
        </li>

        <li>
          <Link className="page-link" to={`/bar`}>
            Page Bar
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
