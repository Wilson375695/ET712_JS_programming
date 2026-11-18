import React, { useState } from "react";
import './App.css';

const ModalWindow = function({ isOpen, username, onClose, onPost }){
    const [comment, setComment] = useState("");

    if (!isOpen) {
        return null;
    }

    const collectComment = () => {
        if (!comment.trim()) {
            return;
        }

        onPost({
            username,
            comment: comment.trim(),
            postedate: new Date().toLocaleDateString()
        });
        setComment("");
        onClose();
    }

    return(
        <section className="modalwindow" style={{ display: "block" }}>
            <div className="modalcontent">
                <header className="modalheader">
                    <p>
                        Add Feedback <span className="modalusername">for <i>{username}</i></span>
                    </p>
                    <p className="closemodal" onClick={onClose}>&#x58;</p>
                </header>
                <main className="modalbody">
                    <input
                        className="commentarea"
                        type="text"
                        placeholder="Type your comments..."
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <button className="btnpostfeedback" onClick={collectComment}>Post Feedback</button>
                </main>
            </div>
        </section>
    )
}

export default ModalWindow