import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditProfile } from '../../services/apiProfiles';
import { toast } from 'react-hot-toast';

export function useEditProfile() {
  const queryClient = useQueryClient();

  const { mutate: editProfile, isPending: isEditing } = useMutation({
    mutationFn: ({ newProfileData, id }) =>
      createEditProfile(newProfileData, id),
    onSuccess: () => {
      toast.success('Profile successfully edited');
      queryClient.invalidateQueries({ queryKey: ['profiles'] });
    },
    onError: (err) => toast.error(err.message)
  });

  return { isEditing, editProfile };
}
