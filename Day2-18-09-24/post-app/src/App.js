import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import PostsComponent from './Components/Posts/PostsComponent';

function App() {
  return (
    <div className="App">
      <PostsComponent />
    </div>
  );
}

export default App;