import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>eMail</LinkTitle>
          <LinkItem herf="yashrok02@gmail.com">yashrok02@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> "Code Your Way to Success!"</Slogan>
        </CompanyContainer>
        <SocialContainer>
         <SocialIcons href="https://github.com">
           <AiFillGithub size="3rem"/>
         </SocialIcons>
         <SocialIcons href="https://linked.com">
           <AiFillLinkedin size="3rem"/>
         </SocialIcons>
         <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem"/>
         </SocialIcons>
         </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
