import { faker } from '@faker-js/faker';
import styles from './DashBoard.module.css';
import { PostProvider, usePosts } from './PostContext';
import { useState } from 'react';
import PageNav from '../components/PageNav';
import Button from '../ui/Button';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: green;
  padding: 2rem 2rem;
  border-bottom: 1px solid var(--col-grey-100);
`;
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase()
  };
}
/*    { posts, onClearPosts, searchQuery, setSearchQuery }
        <div>
          <Results posts={posts} />
          <SearchPosts
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <button onClick={onClearPosts}>Clear posts</button>
        </div>
  */
function Header() {
  // 3). Consuming CONTEXT value
  const { onClearPosts } = usePosts();

  return (
    <StyledHeader>
      <Results />
      <div>
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </StyledHeader>
  );
}

function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

function Results() {
  const { posts } = usePosts();
  const { searchQuery, setSearchQuery } = useState('');
  const [isFakeDark, setIsFakeDark] = useState(false);

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <h3>🚀 {posts.length} atomic posts found</h3>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

function Main() {
  const { posts, onAddPost } = usePosts();

  return (
    <main className="mx-auto max-w-3xl">
      <Header />
      <FormAddPost className="overflow-scroll" />
      <Posts className="grid h-screen grid-rows-[auto_1fr_auto]" />
    </main>
  );
}

function Posts() {
  const { posts } = usePosts();

  return (
    <section>
      <List />
    </section>
  );
}

function FormAddPost() {
  const { onAddPost } = usePosts();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Post body"
        />
        <button>Add post</button>
      </form>
    </>
  );
}

function List() {
  const { posts } = usePosts();

  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {/* <Test /> */}
    </>
  );
}

function Archive() {
  const { onAddPost } = usePosts();

  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? 'Hide archive posts' : 'Show archive posts'}
      </button>

      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function Footer() {
  return <footer>&copy; by ResuMe All ✌️</footer>;
}

export default function Product() {
  return (
    <section className={styles.dashboard}>
      <PageNav />
      <PostProvider>
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

/*
        
*/
