import '../styles/home.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredLetterPost } from '../api/index';
import { addOfferLetterList } from '../redux/action/letterAction';
import { LetterCard } from "../components/index";

export default function OfferLetter() {
    const dispatch = useDispatch();
    const letters = useSelector((state) => state.letterReducer);
    const offerLetterList = letters.offerLetterList;

    useEffect(() => {
        async function fetchData() {
            const response = await getFilteredLetterPost("offerLetter");
            if (response.success) {
                dispatch(addOfferLetterList(response.data.letters));
            }
        }
        fetchData();

    }, []);

    return (
        <div className="Home">
            {
                offerLetterList.map((letter, index) => {
                    return <LetterCard letter={letter} key={`offerLetter-${index}`} />
                })
            }
        </div>
    );
}

