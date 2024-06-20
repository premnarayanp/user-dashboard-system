import '../styles/home.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredLetterPost } from '../api/index';
import { addJoiningLetterList } from '../redux/action/letterAction';
import { LetterCard } from "../components/index";

export default function JoiningLetter() {
    const dispatch = useDispatch();
    const letters = useSelector((state) => state.letterReducer);
    const joiningLetterList = letters.joiningLetterList;

    useEffect(() => {
        async function fetchData() {
            const response = await getFilteredLetterPost("joiningLetter");
            if (response.success) {
                dispatch(addJoiningLetterList(response.data.letters));
            }
        }
        fetchData();

    }, []);

    return (
        <div className="Home">
            {
                joiningLetterList.map((letter, index) => {
                    return <LetterCard letter={letter} key={`joiningLetter-${index}`} />
                })
            }
        </div>
    );
}

