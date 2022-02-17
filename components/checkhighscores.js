
//Checks if there are enough clicks to rewrite highScores and if so, creates the new highScores list

const checkHighScores = (
    highScores,setHighScores,
    clickCounter,
    trackHighScore,setTrackHighScore
    ) => {
    let check = 0               // zero(0) indicates no highScore found and one(1) indicates new highScore found 
    let tempScores = JSON.parse(JSON.stringify(highScores)) // to make a work copy (deep copy)
    for (let i=0;i<10;i++){     // to check all highScores and gets the old one for rewriting
        if (tempScores[i].score < clickCounter && trackHighScore && check===0){ 
            check = 1                           // found enough clicks to rewrite highscores
            setTrackHighScore(false)            // to stop tracking (does not add value to several places in the highscorelist)
            let oldScore = tempScores[i].score  // old highScore value to pass downwards on the list
            tempScores[i].score = clickCounter  // new clicked value to this place
            let start = i+1
            for (let j=start;j<10;j++){         // to rewrite the rest of the highscorelist (move values downwards on the list)
                let tempScore = tempScores[j].score
                tempScores[j].score = oldScore
                oldScore = tempScore
            }
            setHighScores(tempScores)           // work copy to replace the old highscorelist
        }
    }
}
export default checkHighScores;