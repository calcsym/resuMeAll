import styles from './Product.module.css';
import PageNav from '../components/PageNav';
import styled from 'styled-components';
import ProfileTable from '../features/profiles/ProfileTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import AddProfile from '../features/profiles/AddProfile';
import ProfileTableOperations from '../features/profiles/ProfileTableOperations';
//import { getProfiles } from '../services/apiProfiles';
//import { useEffect } from 'react';

const Img = styled.img`
  width: auto;
`;

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
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
      </section>
    </main>
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
