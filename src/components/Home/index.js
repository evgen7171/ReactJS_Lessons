import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/signup">signup</Link>&nbsp;
      <Link to="/login">login</Link>
    </>
  );
}