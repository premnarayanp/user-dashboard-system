import '../styles/home.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLetterPosts } from '../api/index';
import { addLetterList } from '../redux/action/letterAction';
import { LetterCard } from "../components/index";

export default function Home() {
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.letterReducer);
  const letterList = letters.letterList;

  useEffect(() => {
    async function fetchData() {
      const response = await getLetterPosts();
      if (response.success) {
        dispatch(addLetterList(response.data.letters));
      }
      //dispatch(addLetterList(tempList));
    }
    fetchData();

  }, []);

  return (
    <div className="Home">
      {
        letterList.map((letter, index) => {
          return <LetterCard letter={letter} key={`letter-${index}`} />
        })
      }
    </div>
  );
}

