import React from "react";
// import "./Joke.css";

function Joke({vote, votes, text, id}) {
    function upVote(evt) { vote(id, +1); }
    function downVote(evt) { vote(id, -1); }

    return (
        <div>
            <div>
                <button onClick={upVote}>
                    <i className='fes fa-thumbs-up' />
                </button>
                <button onClick={downVote}>
                    <i className='fes fa-thumbs-down' />
                </button>
                {votes}
            </div>
            <div className="Joke-text">{text}</div>
        </div>
    )
}

export default Joke;