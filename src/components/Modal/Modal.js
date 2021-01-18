import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

const NominateModal = ({ nominations }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Trigger modal when length is 5
  useEffect(() => {
    if (nominations.length === 5) {
      onOpen();
    }
  }, [nominations, onOpen]);

  return (
    <>
      <Button onClick={onOpen} bg="purple.300">
        Share
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share Your Nominations!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Here's your link:</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default NominateModal;
