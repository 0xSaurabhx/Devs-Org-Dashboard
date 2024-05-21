import React from 'react';

import Logo from './Logo';

const Hero = () => (
  
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
    Your Gateway to Free APIs
    </h1>

    <p className="lead" data-testid="hero-lead">
    Are you a developer seeking access to a wealth of useful APIs to supercharge your projects? Look no further! Dev's Org is your one-stop destination for a diverse range of free APIs, meticulously curated to empower developers like you.
     
    </p>
  </div>
);

export default Hero;
