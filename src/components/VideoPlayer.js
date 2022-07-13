import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { AiOutlineClose } from 'react-icons/ai';
import "./css/VideoPlayer.css";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '50vh',
        width: 'auto',
        maxWidth: '100%',
        position: 'absolute',
        // backgroundColor: 'rgba(0, 0, 0, 0)',
        border: 'none',
        padding: '20px',
        overflow: 'hidden',
        zIndex: '9999',
        marginTop: '10px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
};


Modal.setAppElement('#video-player-modal');

function VideoPlayer({ url, isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
            <div className='close-button' onClick={onClose}>
                <AiOutlineClose size={25} />
            </div>
            <ReactPlayer url={url} controls={true} playing={isOpen} width='100%' height='100%' />
        </Modal>
    )
}

export default VideoPlayer;