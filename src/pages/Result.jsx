import { Link, useLocation } from "react-router-dom"

export default function Results() {
  const { state } = useLocation()
  const { score, total, answers } = state || {}

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 text-center">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-blue-800 mb-4">🎉 Quiz Results</h1>
      <p className="text-lg mb-12 text-gray-700">
        You scored <span className="font-bold text-blue-700"><b>{score}</b></span> out of{" "}
        <span className="font-bold">{total}</span>
      </p>

      {/* Answers List */}
      <ul className="space-y-6">
        {answers.map((a, i) => {
          const isCorrect = a.selected === a.correct
          return (
            <li
              key={i}
              className={`p-6 rounded-xl shadow-md transition-all duration-300 text-left ${
                isCorrect ? "bg-green-50 border border-green-300" : "bg-red-50 border border-red-300"
              }`}
            >
              {/* Question */}
              <p
                className="font-semibold text-gray-900 mb-2"
                dangerouslySetInnerHTML={{ __html: a.question }}
              />

              {/* User Answer */}
              <p className="mb-1">
                Your answer:{" "}
                <span className={isCorrect ? "text-green-700 font-medium" : "text-red-700 font-medium"}>
                  {a.selected || "Not Answered"}
                </span>
              </p>

              {/* Correct Answer (if wrong) */}
              {!isCorrect && (
                <p className="text-green-700 font-medium">
                  ✅ Correct answer: {a.correct}
                </p>
              )}
            </li>
          )
        })}
      </ul>

      {/* Restart Button */}
      <Link
        to="/"
        className="mt-10 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300"
      >
        🔄 Restart Quiz
      </Link>
    </div>
  )
}
