import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from "faker";

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/AppStyle.css'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 6:00PM"
          text="Nice blog post"
          picture={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          time="Today at 5:36PM"
          text="Nice comment bro"
          picture={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="Yesterday at 11:53PM"
          text="I don't know what I'm doing"
          picture={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

root.render(<App />);
