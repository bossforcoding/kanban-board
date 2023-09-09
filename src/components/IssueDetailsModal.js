import React from 'react';
import "../styles/IssueDetailsModal.css"

function IssueDetailsModal(props) {
    const { id, title, type, status } = props.issue
    const { onClose } = props

    const showModal = true;

    return (
        <div
            className="issue-details-modal"
            show={showModal}
            onHide={onClose}
        >
            <div class="modal-wrapper">
                <div class="modal-box">
                    <div class="modal-header">
                        <div class="modal-title-box">
                            <div class="modal-title-border">
                                <h2 class="modal-title">{title}</h2>
                            </div>
                        </div>
                        <div class="modal-close-box">
                            <button class="modal-close-button" onClick={onClose}>x</button>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-border">
                            <div class="modal-body-item">
                                <strong>Type:</strong> {type}
                            </div>
                            <div class="modal-body-item">
                                <strong>Status:</strong> {status}
                            </div>
                            <div class="modal-body-item">
                                <strong>Id:</strong> {id}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default IssueDetailsModal;
