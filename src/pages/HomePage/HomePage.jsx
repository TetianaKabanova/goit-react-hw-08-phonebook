import React from 'react';
import { HomeIcon, HomePageContainer, Title } from './HomePage.styled';
import { ContactsTwoTone } from '@ant-design/icons';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>
        My Contacts
        <HomeIcon>
          <ContactsTwoTone />
        </HomeIcon>
      </Title>
    </HomePageContainer>
  );
};

export default HomePage;
