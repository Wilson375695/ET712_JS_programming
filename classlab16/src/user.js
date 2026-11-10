import React from "react";
import './App.css';

const User = function(props){
    return(
        <>
            <section className="card">
                <a><img src={props.image} /></a>

                <div className="content">
                    <a className="author">{props.username}</a>
                </div>

                <div className="metadata">
                    <p>Posted on <span className="date">{props.date}</span></p>
                </div>

                <div className="comment">
                    <p><i>{props.msg}</i></p>
                </div>
            </section>
        </>
    );
}

export default User