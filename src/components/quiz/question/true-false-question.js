import React, {useState} from "react"

const TrueFalseQuestion = ({question}) => {
    const [selectedAnswer, setSelectedAnswer] = useState([])
    const [graded, setGraded] = useState(false)

    const getBackgroundColor = (choice) => {
        if (choice === question.correct) {
            return "list-group-item-success"
        } else if (choice === selectedAnswer) {
            return "list-group-item-danger"
        } else {
            return ""
        }
    }

    const getIcon = (choice) => {
        if (choice === question.correct) {
            return "fas fa-check"
        } else if (choice === selectedAnswer) {
            return "fas fa-times"
        } else {
            return ""
        }
    }

        return (
            <>
                <h3>
                    {question.title}
                    {
                        graded === true &&
                        <i className={`float-right ${selectedAnswer === question.correct ? 'fas fa-check text-success' : 'fas fa-times text-danger'}`}/>
                    }
                </h3>
                <ul className="list-group">
                    <li className={`list-group-item ${graded === true ? getBackgroundColor("true") : ''}`}>
                        <label><input type="radio" name={question._id} value="true"
                                      onClick={() => {
                                          if (graded === false) {
                                              setSelectedAnswer("true")
                                          }
                                      }}/>True</label>
                        {
                            graded === true &&

                            <i className={`float-right ${getIcon("true")}`}/>
                        }
                    </li>
                    <li className={`list-group-item ${graded === true ? getBackgroundColor("false") : ''}`}>
                        <label><input type="radio" name={question._id} value="false"
                                      onClick={() => {
                                          if (graded === false) {
                                              setSelectedAnswer("false")
                                          }
                                      }}/>False</label>
                        {
                            graded === true &&

                            <i className={`float-right ${getIcon("false")}`}/>
                        }
                    </li>
                </ul>
                <p>
                    Your answer: {selectedAnswer}
                </p>
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            setGraded(true)
                        }}
                >Grade
                </button>
            </>
        )
}


export default TrueFalseQuestion