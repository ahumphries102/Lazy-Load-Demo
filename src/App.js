import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import data from './data'
import logo from './logo.svg';
import './App.css';

const Spinner = () => (
    <div className="post loading">
  <h5>Loading...</h5>
  </div>
)

const Post = ({ id, title, body }) => {
    return (
        <div className="post">
        <LazyLoad once={true}
        placeholder={<img src={`https://picsum.photos/id/${id}/5/5`} atl="..."/>
}>
          <div className="post-img">
          <img src={`https://picsum.photos/id/${id}/200/200`} atl="..."/>
          </div>
          </LazyLoad>
        <div className="post-body">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </div>
    );
}


export default function App() {

    return (
        <div className='App'>
      <h2>LazyLoad Demo</h2>
        <div className="post-container">
        {data.map(post=>(
          <LazyLoad 
          key={post.id} 
          height={100}
          offset={[-100, 100]}
          placeholder={<Spinner/>}>

            <Post key={post.id} {...post}/>
          </LazyLoad>
          ))}
      </div>
    </div>
    )
}