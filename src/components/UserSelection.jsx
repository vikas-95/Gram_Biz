import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";
import Farmer from "../Images/farmer.png";
import Investor from "../Images/investor.png";

export default function UserSelection() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div className="flex justify-center mt-10">
        <Button
          onPress={onOpen}
          className=" items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          color="default"
        >
          PICK A USER TYPE
        </Button>
      </div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          hideCloseButton={true}
        >
          <ModalContent>
            {(onClose) => (
              <div className="flex gap-3">
                <div className="border rounded-lg">
                  <ModalHeader className="flex flex-col gap-1 items-center p-4">
                    FARMER
                  </ModalHeader>
                  <ModalBody>
                    <img src={Farmer} alt="" />
                  </ModalBody>
                </div>
                <div className="border rounded-lg">
                  <ModalHeader className="flex flex-col gap-1 items-center p-4">
                    INVESTOR
                  </ModalHeader>
                  <ModalBody>
                    <img src={Investor} alt="" />
                  </ModalBody>
                </div>
                {/* <ModalFooter>
                <Button
                  color="primary"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter> */}
              </div>
            )}
          </ModalContent>
        </Modal>
      </div>
  );
}
