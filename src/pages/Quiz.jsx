import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import QuestionCard from "../components/QuestionCard"
import ProgressBar from "../components/ProgressBar"
import localQuestions from "../data/questions.json"

export default function Quiz() {
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => {
        if (data.results?.length) {
          const formatted = data.results.map((q) => ({
            question: q.question,
            options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
            correct: q.correct_answer
          }))
          setQuestions(formatted)
        } else {
          setQuestions(localQuestions)
        }
      })
      .catch(() => setQuestions(localQuestions))
  }, [])

  function handleAnswer(option) {
    const correct = questions[current].correct
    if (option === correct) setScore(prev => prev + 1)
    setAnswers([...answers, { 
      question: questions[current].question, 
      selected: option, 
      correct 
    }])
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1)
    } else {
      navigate("/results", { state: { score, answers, total: questions.length } })
    }
  }

  if (!questions.length) return <p className="text-center mt-20">Loading...</p>

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <ProgressBar current={current + 1} total={questions.length} />
      <QuestionCard 
        question={questions[current]} 
        onAnswer={handleAnswer} 
      />
    </div>
  )
}
