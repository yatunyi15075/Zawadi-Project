import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import AddSchoolForm from './AddSchoolForm';
import AllSchoolsList from './AllSchoolsList';
import AllSchoolsButtons from './AllSchoolsButtons';

const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const AllSchools = () => {
  const [schools, setSchools] = useState([]);

  const addSchool = (school) => {
    setSchools([...schools, school]);
  };

  return (
    <Container>
      <Title>Schools Management</Title>
      <AllSchoolsButtons />
      <Routes>
        <Route path="add-school" element={<AddSchoolForm addSchool={addSchool} />} />
        <Route path="all-schools" element={<AllSchoolsList schools={schools} />} />
      </Routes>
    </Container>
  );
};

export default AllSchools;
