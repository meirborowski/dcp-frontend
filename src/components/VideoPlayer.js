import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

const customStyles = {
    content: {
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};


Modal.setAppElement('#video-player-modal');

function VideoPlayer({ url, isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
            <ReactPlayer url={url} controls={true} playing={isOpen} width='100%' height='100%' />
        </Modal>
    )
}

export default VideoPlayer;