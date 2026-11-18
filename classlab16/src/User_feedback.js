import React, { useState } from "react";
import './App.css';
import ModalWindow from "./Modal_window.js";

const User_feedback = function(props){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalWindow = () => {
        setIsModalOpen(true);
    }

    return(
        <>
            <div className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content">
                        <p>{props.username}</p>
                    </div>
                    <div className="description">
                        {props.children}
                    </div>
                    <div className="cardfooter" onClick={openModalWindow}>
                        <p>
                            <span>&#10011;</span>
                            Add Feedback
                        </p>
                    </div>
                </section>
            </div>

            <ModalWindow
                isOpen={isModalOpen}
                username={props.username}
                onClose={() => setIsModalOpen(false)}
                onPost={props.onPost}
            />
        </>
    )
}

export default User_feedback