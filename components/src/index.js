import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from "faker";

import CommentDetail from './CommentDetail';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author="Sam"
        time="Today at 6:00PM"
        text="Nice blog post"
        picture={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        time="Today at 5:36PM"
        text="Nice comment bro"
        picture={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        time="Yesterday at 11:53PM"
        text="I don't know what I'm doing"
        picture={faker.image.image()}
      />
    </div>
  );
};

root.render(<App/>);
