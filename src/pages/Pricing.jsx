// Uses the same styles as Product
import PageNav from '../components/PageNav';
import Sidebar from '../ui/Sidebar';
import CreateProfileForm from '../features/profiles/CreateProfileForm';
import styled from 'styled-components';

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

const StyledImg = styled.img`
  width: auto;
`;

export default function Pricing() {
  return (
    <StyledProduct>
      <PageNav />

      <StyledProductSection>
        <div>
          <Sidebar />
          <CreateProfileForm />
        </div>
      </StyledProductSection>
    </StyledProduct>
  );
}

/*      <img
          src="img-2.jpg"
          alt="overview of a large city with skyscrapers"
        />  />
      <section className="flex grow flex-col pt-0.5">

*/
