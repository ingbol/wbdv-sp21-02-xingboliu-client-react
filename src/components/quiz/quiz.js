import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import QuestionService from '../../services/questions-service'
import Question from "./question/question";

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    })

    return(
        <>
            <h2>Quiz {quizId}</h2>
            <div className="border p-3">
                {
                    questions.map(question => {
                        return <Question question={question}/>
                    })
                }
            </div>
        </>
    )
}

export default Quiz;