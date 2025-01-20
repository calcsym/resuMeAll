import { useQuery } from '@tanstack/react-query';
import { getProfiles } from '../../services/apiProfiles';

export function useProfiles() {
  const {
    isPending,
    data: profiles,
    error
  } = useQuery({
    queryKey: ['profiles'],
    queryFn: getProfiles
  });

  return { isPending, error, profiles };
}
