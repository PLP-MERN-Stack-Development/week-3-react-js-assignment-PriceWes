import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch posts.');
        setLoading(false);
      });
  }, [page]);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card>
      <h2 className="text-xl font-bold mb-2">Posts</h2>
      <input
        className="border rounded px-2 py-1 mb-2 w-full"
        placeholder="Search posts"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <ul>
        {filtered.map(post => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <Button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage(p => p + 1)}>Next</Button>
      </div>
    </Card>
  );
};

export default PostList;