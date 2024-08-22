import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        Streamflix is a Netflix clone project created for educational purposes only. It is not affiliated with Netflix.
      </p>
      <p style={textStyle}>
        &copy; {new Date().getFullYear()} Aparna Sarawadekar. All rights reserved.
      </p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const textStyle: React.CSSProperties = {
  margin: '5px 0',
  fontSize: '14px',
};

export default Footer;
