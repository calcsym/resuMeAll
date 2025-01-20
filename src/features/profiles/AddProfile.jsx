import Button from "../../ui/Button";
import CreateProfileForm from "./CreateProfileForm";
import Modal from "../../ui/Modal";

function AddProfile() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="profile-form">
          <Button>Add new profile</Button>
        </Modal.Open>
        <Modal.Window name="profile-form">
          <CreateProfileForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddProfile;
