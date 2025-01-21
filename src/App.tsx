import './App.css'
import Button from "./components/UI/Button/Button.tsx";
import Modal from "./components/UI/Modal/Modal.tsx";
import {useState} from "react";

const App = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

  return (
      <>
          <div className="container">
              <h1 className="m-5 p-1">Level 1</h1>
              <Button
                  text='Show Modal'
                  color='primary'
                  width={'30%'}
                  onClickBtn={() => setShowModal(!showModal)}
              />
              <Modal show={showModal} title="Level 1 Modal window" onClose={() => setShowModal(false)}>
                  Helloooo!!
              </Modal>
          </div>
      </>
  )
};

export default App
