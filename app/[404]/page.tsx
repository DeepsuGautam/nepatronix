import React from 'react';
import Link from 'next/link';

const PageNotFound = () => {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
    fontFamily: 'Arial, sans-serif',
    fontSize:"20px",
    padding:"20px"
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '8rem',
    margin: '0',
    width:"100%",
    maxWidth:"500px"
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: '20px',
    margin: '0.5rem 0',
    width:"100%",
    maxWidth:"500px"
  };

  const messageStyle: React.CSSProperties = {
    margin: '1rem 0',
    width:"100%",
    maxWidth:"500px"
  };

  const linkStyle: React.CSSProperties = {
    marginTop: '1rem',
    padding: '10px',
    fontSize: '20px',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer'
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>404</h1>
      <br/>
      <h2 style={subHeadingStyle}>Page Not Found</h2>
      <p style={messageStyle}>The page you are looking for might have been removed or is temporarily unavailable due to developing phase of the website.</p>
      <Link href="/" style={linkStyle}>
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
