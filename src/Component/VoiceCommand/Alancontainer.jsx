/* eslint-disable no-undef */

import { useEffect, useRef } from 'react';
import styles from "./Alan.module.css"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web/dist/alan_lib';
import MicIcon from '@mui/icons-material/Mic';

const startvoiceContext = async () => {
    const voiceContext = new AudioContext();
    await voiceContext.audioWorklet.addModule('https://sdk.alan.app/js/alan_lib.js');
    return voiceContext;
};
const key = import.meta.env.VITE_Alan_Button_Activation_Key;

 const AlanContainer = (props) => {
    const BtnRef = useRef(null);
    const [isButtonVisible, setButtonVisibility] = useState(true); // Step 1

    const navigate = useNavigate(); // Use useNavigate to get navigation function

    useEffect(() => {
        startvoiceContext().then((voiceContext) => {
            alanBtn({
                key,
                onCommand: (commandData) => {
                
                    if (commandData.command === 'setHome') {
                        navigate('/');
                    }

                    if (commandData.command === 'setAbout') {
                        navigate('/About');
                    }
                    if (commandData.command === 'Previous Page') {
                        navigate(-1);
                    }
                    if (commandData.command === 'Next page') {
                        navigate(1);
                    }

                },
                soundLevel: BtnRef.current,
                voiceContext: voiceContext,
            });
        });
    }, []);
    const activateAlan = () => {
        if (isButtonVisible) {
            setButtonVisibility(false); // Hide the button
        }
        const BtnInstance = alanBtn({
            key,
      
            rootEl: BtnRef.current,
            onCommand: (commandData) => {

                if (commandData.command === 'setHome') {
                    navigate('/');
                }

                if (commandData.command === 'setAbout') {
                    navigate('/About');
                }

                if (commandData.command === 'Previous Page') {
                    navigate(-1);
                }
                if (commandData.command === 'Next page') {
                    navigate(1);
                }

            }

        });
        BtnInstance.activate();

    };

    return (

        <>

 

            <div className='alan-btn-container   '>
                <div ref={BtnRef} />
                {isButtonVisible && (
                    <button className={styles.Activebtn} onClick={activateAlan}>
                        <MicIcon fontSize="large" />
                    </button>
                )}
            </div></>
    );
};

export default AlanContainer;

