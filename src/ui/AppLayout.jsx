import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import User from '../components/User';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 36rem 1fr;
  grid-template-rows: auto 1fr;
  height: calc(100vh);
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 0rem 0rem 0rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Map />
      </Main>
      <User />
    </StyledAppLayout>
  );
}

export default AppLayout;
