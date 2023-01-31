import React from 'react';

export default function UserDateStamp({ user, date }) {
  return (
    <div>
      <small>
        {user}
        {', '}
        {date}
      </small>
    </div>
  );
}
