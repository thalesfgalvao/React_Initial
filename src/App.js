import P from 'prop-types';
import { useMemo, useEffect, useState } from 'react';
import './App.css';

const Post = ({post}) =>{
  console.log('Filho renderizou');
  return(
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

Post.propType = {
  post: P.shape({
  id: P.number,
  title: P.string,
  body: P.string,
  }),
};

const App = () => {
  console.log('Pai renderizou');
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
          <p>
            <input type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
          </p>
          {useMemo(() => {
            return (
              posts.length > 0 && 
              posts.map((post) => {
                return <Post key={post.id} post={post}/>;
              })
            );
          }, [posts])}
          {posts.length <= 0 && <p>Ainda não possui posts</p>}
      </header>
    </div>
  );
}

export default App;
