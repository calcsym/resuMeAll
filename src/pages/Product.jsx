import PageNav from '../components/PageNav';
import styled from 'styled-components';
import ProfileTable from '../features/profiles/ProfileTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddProfile from '../features/profiles/AddProfile';
import ProfileTableOperations from '../features/profiles/ProfileTableOperations';
//import { getProfiles } from '../services/apiProfiles';
//import { useEffect } from 'react';

const StyledImg = styled.img`
  width: auto;
`;

const StyledProduct = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url('../bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 2.5rem 5rem;
`;

const StyledProductSection = styled.section`
  width: clamp(80rem, 100%, 90rem);
  margin: 6rem auto;
  display: flex;
  gap: 7rem;
  align-items: center;
`;

export default function Product() {
  return (
    <StyledProduct>
      <PageNav />

      <StyledProductSection>
        <div>
          <Row type="horizontal">
            <Heading as="h1">All Profiles</Heading>
            <ProfileTableOperations />
          </Row>

          <Row>
            <ProfileTable />
            <AddProfile />
          </Row>
        </div>
      </StyledProductSection>
    </StyledProduct>
  );
}
//
//

/*       
import ProfileTable from '../features/profiles/ProfileTable';
import Heading from '../ui/Header';
import Row from '../ui/Row';
import AddProfile from '../features/profiles/AddProfile';
import ProfileTableOperations from '../features/profiles/ProfileTableOperations';
import { getProfiles } from '../services/apiProfiles';
import { useEffect } from 'react';
  useEffect(function () {
    getProfiles().then((data) => console.log(data));
  }, []); 
        <div>
          <Row type="horizontal">
            <Heading as="h1">All Profiles</Heading>
            <ProfileTableOperations />} 
          </Row>

          <Row>
            <ProfileTable />
            <AddProfile />
          </Row>
        </div>
        
        <Img
          src="https://bkxptjmdffrrbvolrdii.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
*/

/*
 */
