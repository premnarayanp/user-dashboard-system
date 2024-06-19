import '../styles/letterCard.css';
export default function LetterCard(props) {
    const letter = props.letter;
    return (
        <div className="card LetterCard">
            <img src={letter.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{letter.title}</h5>
                <p className="card-text">{letter.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Released Date:- {letter.issueDate}</li>
                {letter.acceptDate && <li className="list-group-item">Accept Date:- {letter.acceptDate}</li>}
                {letter.joiningDate && <li className="list-group-item">Joining Date:- {letter.joiningDate}</li>}
                <li className="list-group-item">Roll:- {letter.roll}</li>
                <li className="list-group-item">Package:- {letter.package}</li>
                <li className="list-group-item">Location:- {letter.location}</li>
            </ul>
            <div className="card-body">
                <a href="https://drive.google.com/file/d/1dYgAtOsvpfrWsGZVWmtBIa7rwTBwY9uJ/view?usp=drive_link" className="card-link">View</a>
                <a href="#" className="card-link">Download</a>
            </div>
        </div>
    );
}

