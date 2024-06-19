import '../styles/letterCard.css';
import { useToasts } from 'react-toast-notifications';
import { downloadLetter } from '../api/axios'
export default function LetterCard(props) {
    const letter = props.letter;
    const API_ROOT = 'http://localhost:8362';
    const { addToast } = useToasts();

    const downloadPdfFile = async () => {
        const response = await downloadLetter(letter._id);
        if (response.success) {
            //Build a URL from the file
            var file = new Blob([response.data], { type: 'application/pdf' });
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = "MyPdf.pdf"
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);

            addToast('Pdf Successfully Downloaded', {
                appearance: 'success',
            });
        } else {
            addToast(response.message, {
                appearance: 'error',
            });
        }
    }


    return (
        <div className="card LetterCard">
            <img src={API_ROOT + letter.letterThumbURL} className="card-img-top" alt="..." />
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
                <a href={API_ROOT + letter.letterURL} className="card-link">View</a>
                <button className="card-link" onClick={downloadPdfFile} >Download</button>
            </div>
        </div>
    );
}

