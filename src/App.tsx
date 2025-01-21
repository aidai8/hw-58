import './App.css'
import Button from "./components/UI/Button/Button.tsx";
import Modal, {ButtonConfig} from "./components/UI/Modal/Modal.tsx";
import {useState} from "react";
import Alert from "./components/UI/Alert/Alert.tsx";

const App = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const modalButtons: ButtonConfig[] = [
        {
            type: 'primary',
            label: 'Continue',
            onClick: () => {
                console.log('Clicked Continue');
                alert('Continue button clicked!');
            },
        },
        {
            type: 'danger',
            label: 'Close',
            onClick: () => {
                console.log('Clicked Close');
                setShowModal(false);
            },
        },
    ];

    const [showAlert, setShowAlert] = useState(true);

    const closeAlert = () => {
        setShowAlert(false);
    };

  return (
      <>
          <div className="container mt-4">
              <h1>Level 1</h1>
              <Button
                  text='Show Modal'
                  color='primary'
                  width={'30%'}
                  onClickBtn={() => setShowModal(!showModal)}
              />
              <Modal
                  show={showModal}
                  title="Level 1 Modal window"
                  onClose={() => setShowModal(false)}
                  buttons={modalButtons}
              >
                  Helloooo!!
              </Modal>
          </div>

          <div className="container mt-4">
              <h1>Level 2</h1>
              {showAlert && (
                  <Alert type="warning" onDismiss={closeAlert}>
                      This is a warning type alert
                  </Alert>
              )}
              <Alert type="success">This is a success type alert</Alert>
          </div>
      </>
  )
};

export default App
