import React from 'react';
import Link from 'next/link'

export default ({id,title,link})=>(
  <div className="podcast" key={id}>
      <Link  href={link} prefetch>
        <a>{title} </a>
      </Link>
    <style jsx>{`
    .podcast {
        display: block;
        text-decoration: none;
        color: #333;
        padding: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        cursor: pointer;
      }
      .podcast:hover {
        color: #000;
      }
      .podcast h3 {
        margin: 0;
      }
      .podcast .meta {
        color: #666;
        margin-top: 0.5em;
        font-size: 0.8em;
      }
      .podcast a {
        text-decoration: none;
      }
    `}</style>
  </div>
)