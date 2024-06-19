import '../styles/home.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLetterPosts } from '../api/index';
import { addLetterList } from '../redux/action/letterAction';
import { LetterCard } from "../components/index";

const tempList = [
  { _id: 1, title: "Offer Letter", letterType: "offer_letter", description: "Hi we offer you in MERN", issueDate: "20/06/2024", acceptDate: "20/06/2024", joiningDate: "", roll: "Full Stack Developer", package: "600000", location: "Noida", img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { _id: 2, title: "Joining Letter", letterType: "joining_letter", description: "Hi we offer you in MERN", issueDate: "20/06/2024", joiningDate: "20/06/2024", acceptDate: "", roll: "Full Stack Developer", package: "600000", location: "Bhopal", img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg" },
  { _id: 3, title: "Offer Letter", letterType: "offer_letter", description: "Hi we offer you in MERN", issueDate: "20/06/2024", acceptDate: "20/06/2024", joiningDate: "", roll: "Full Stack Developer", package: "600000", location: "Online", img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
  { _id: 4, title: "Joining Letter", letterType: "joining_letter", description: "Hi we offer you in MERN", issueDate: "20/06/2024", joiningDate: "20/06/2024", acceptDate: "", roll: "Full Stack Developer", package: "600000", location: "Pune", img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk=" },
];




export default function Home() {
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.letterReducer);
  //console.log("letters=", letters)
  const letterList = letters.letterList;

  useEffect(() => {
    async function fetchData() {
      // const response = await getLetterPosts();
      // if (response.success) {
      //   dispatch(addLetterList(response.data.pdfList));
      // }
      dispatch(addLetterList(tempList));
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

