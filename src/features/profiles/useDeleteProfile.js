import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProfile as deleteProfileApi } from "../../services/apiProfiles";

export function useDeleteProfile() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteProfile } = useMutation({
    mutationFn: deleteProfileApi,
    onSuccess: () => {
      toast.success("Profile successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["profiles"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProfile };
}
