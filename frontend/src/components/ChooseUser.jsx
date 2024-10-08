// ChooseUser.js
import React from 'react';
import { ChooseUserContainer, UserSection, Title, Button } 
from '../styles/ChooseUserStyles'; // Import styles
import { Link } from 'react-router-dom';

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin(School Manager)</Title>
        <Button to="/admin-signIn">Login as Admin</Button>
      </UserSection>
      <UserSection>
        <Title>Student/ Parent</Title>
        <Button to="/parent-signIn">Login as Student/ Parent</Button>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Button to="/teacher-signIn">Login as Teacher</Button>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
