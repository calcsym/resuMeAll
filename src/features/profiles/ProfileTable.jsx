import Spinner from '../../ui/Spinner';
import ProfileRow from './ProfileRow';
import { useProfiles } from './useProfiles';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

function ProfileTable() {
  const { isPending, profiles } = useProfiles();
  const [searchParams] = useSearchParams();

  if (isPending) return <Spinner />;
  if (!profiles.length) return <Empty resourceName="profiles" />;

  // 1) FILTER
  const filterValue = searchParams.get('discount') || 'all';

  let filteredProfiles;
  if (filterValue === 'all') filteredProfiles = profiles;
  if (filterValue === 'no-discount')
    filteredProfiles = profiles.filter((profile) => profile.discount === 0);
  if (filterValue === 'with-discount')
    filteredProfiles = profiles.filter((profile) => profile.discount > 0);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedProfiles = filteredProfiles.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Profile</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={profiles}
          // data={filteredProfiles}
          data={sortedProfiles}
          render={(profile) => (
            <ProfileRow profile={profile} key={profile.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ProfileTable;

/*
const {
isLoading, 
data: cabins,
error,
} = useQuery({
 queryKey: ["cabins"],
 queryFn: getCabins,
});

*/
