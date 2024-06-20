import Letter from '../models/letter.js';

export const getAllLetters = async function (req, res) {
    try {
        const letters = await Letter.find({ user: req.user._id });
        // console.log("letters==", letters);
        if (letters) {
            return res.json({ success: true, msg: "Success loaded all Letters", data: { letters: letters } });
        } else {
            return res.json({ success: false, msg: "There is nothing pdf", data: null });
        }

    } catch (error) {
        console.log("============error=============", error);
        return res.json({ success: false, msg: "Internal server Error..", data: null });
    }

}

export const filterLetter = async (req, res) => {


    try {
        const letterType = req.params.letterType;
        //console.log("letterType=", letterType);
        const letters = await Letter.find({
            letterType: letterType
        });
        res.status(200).json({ success: true, msg: "You have Letters that gated", data: { letters: letters } });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

//Download My PDF
export const downloadLetter = async function (req, res) {
    // console.log("============inside download==============")
    try {
        const letter = await Letter.findById({ _id: req.params.letter_id });
        if (Letter) {

            if (letter.user.equals(req.user._id)) {

                //res.sendFile(path.join(__dirname, '../uploads/posts/pdf/') + Letter.fileName);
                res.download('./uploads/posts/pdf/' + letter.letterName);

            } else {
                return res.json({ success: false, msg: "You could not download this Letter..", data: { letter: null } });

            }

        } else {
            return res.json({ success: false, msg: "Could not found pdf,Pdf not available..", data: { letter: null } });
        }

    } catch (error) {
        console.log('error in finding Pdf', error);
        return res.json({ success: false, msg: "Internal server Error..", data: null });

    }
}