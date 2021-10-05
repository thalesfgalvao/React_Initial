import P from 'prop-types';
import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const Post = ({post}) =>{
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

  const [posts, setPosts] = useState([]);

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
        <Container>
        {posts.length > 0 && 
        posts.map((post) => {
          return <Post key={post.id} post={post}/>
        })}
        {posts.length <= 0 && <p>Ainda não possui posts</p>}
        </Container>
      </header>
    </div>
  );
}

export default App;
