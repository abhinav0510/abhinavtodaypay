import { useState } from "react"

export default function QuestionCard({ question, onAnswer }) {
  const [lockedAnswer, setLockedAnswer] = useState(null)

  const handleClick = (opt) => {
    setLockedAnswer(opt)
    onAnswer(opt)
  }

  return (
    <div className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
      
      <h2
        className="text-xl font-bold mb-6 text-blue-600"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((opt, idx) => {
          const isLocked = lockedAnswer === opt
          return (
            <button
              key={idx}
              className={`px-5 py-3 rounded-xl font-medium border transition-all duration-300 focus:outline-none 
                ${
                  isLocked
                    ? "bg-blue-700 text-white border-blue-700 shadow-md scale-105"
                    : "bg-white text-blue-700 border-blue-300 hover:bg-blue-200"
                }`}
              onClick={() => handleClick(opt)}
              dangerouslySetInnerHTML={{ __html: opt }}
            />
          )
        })}
      </div>
    </div>
  )
}
