import React, {lazy, useState, Suspense} from 'react';
import CurrentSeason from "./components/currentSeason";
import Modal from "./components/modal";

const NextSeason = lazy(() => import('./components/nextSeason'));
import './App.css';

function App(): JSX.Element {

    const [open, setOpen] = useState<boolean>(false);

    const onClick = (): void => {
        setOpen(true);
    }

    return (
        <>
            <div className="container">
                <CurrentSeason onClick={onClick}/>
            </div>
            {open && (
                <Modal>
                    <Suspense fallback={<div>Chargement...</div>}>
                        <NextSeason/>
                    </Suspense>
                </Modal>
            )}
        </>
    )
}

export default App;