import React from 'react';

import Disclaimer from '../../components/Disclaimer/Disclaimer';
import SectionPools from 'features/vault/sections/SectionPools.js';

export default function HomePage() {
  return (
    <>
      <Disclaimer />
      <SectionPools fromPage="home" />
    </>
  );
}
