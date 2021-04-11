import React,{useState} from "react";

const MultipleChoiceQuestion = ({question}) => {

    const [selectedAnswer, setSelectedAnswer] = useState([])
    const [graded, setGraded] = useState(false)

    const getBackgroundColor = (choice) => {
        if (choice === question.correct){
            return "list-group-item-success"
        } else if (choice === selectedAnswer) {
            return "list-group-item-danger"
        } else {
            return ""
        }
    }

    const getIcon = (choice) => {
        if (choice === question.correct){
            return "fas fa-check"
        } else if (choice === selectedAnswer) {
            return "fas fa-times"
        } else {
            return ""
        }
    }

    return(
        <>
            <h3>
                {question.title}
                {
                    graded === true &&
                        <i className={`float-right ${selectedAnswer === question.correct? 'fas fa-check text-success': 'fas fa-times text-danger'}`}/>
                }
            </h3>
            <ul className="list-group">
            {
                question.choices.map((choice) => {
                    return(
                        <li className={`list-group-item ${graded === true? getBackgroundColor(choice): ''}`}>
                            <label><input type="radio" name={question._id} value={choice}

                                          onClick={() => {
                                            if (graded === false){
                                                setSelectedAnswer(choice)
                                            }
                            }}/>{choice}</label>
                            {
                                graded === true &&

                                <i className={`float-right ${getIcon(choice)}`}/>


                            }
                        </li>
                    )
                })
            }
            </ul>
            <p>
                Your answer: {selectedAnswer}
            </p>
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        setGraded(true)
                    }}
            >Grade</button>
        </>
    )
}


export default MultipleChoiceQuestion