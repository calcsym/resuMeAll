import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createEditProfile } from '../../services/apiProfiles';

export function useCreateProfile() {
  const queryClient = useQueryClient();

  const { mutate: createProfile, isPending: isCreating } = useMutation({
    mutationFn: createEditProfile,
    onSuccess: () => {
      toast.success('New profile successfully created');
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isCreating, createProfile };
}
