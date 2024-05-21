import React from 'react';

const Logo = ({ testId }) => (
  <figure className="HeroLogo" title="Dev's Org" data-testid={testId}>
    <img src="https://i.ibb.co/zJ8CcKR/devs-org.png" alt="Logo" height="200" width="200" />
  </figure>
);

export default Logo;