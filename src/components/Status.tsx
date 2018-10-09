import * as React from 'react';

interface IProps {
  status: string;
  userName: string;
}

const Status = ({ status, userName }: IProps) => (
  <article>
    <p>{status}</p>
    <footer>@{userName}</footer>
  </article>
);

export default Status;
