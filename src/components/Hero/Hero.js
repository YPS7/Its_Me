import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio

      </SectionTitle>
      <SectionText>
      A dynamic, hands-on, detail-oriented and highly analytical IT professional. Solid reputation for diligence regarding project accuracy and enhanced end user functionality. Exemplary verbal and written communicator who demonstrates professionalism and clearly conveys project parameters to clients and team members.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/YPS7'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;