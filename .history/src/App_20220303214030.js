import { Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import { List } from "./components/List";
import './App.css';
import Posts from "./Posts";
import Create from "./Create"
import Post from './Post'
import Edit from './Edit'
import Image from './Image'

function App() {
  return (
    <div className="App">
      <Link to="/">{<Image />}</Link>
      {/* <About/> */}
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Posts/>}/>
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )  
}

export default App;

