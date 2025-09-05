import { Link } from "react-router-dom"

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white text-center p-4">

  <h1 className="text-4xl md:text-5xl font-extrabold mb-10 drop-shadow-lg animate-bounce">
    Welcome to the Quiz App 🎉
  </h1>

  
  <div className="relative group">
    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 blur-lg opacity-70 group-hover:opacity-100 transition duration-700"></div>
    
    <Link
      to="/quiz"
      className="relative px-10 py-4 bg-white text-purple-700 font-semibold rounded-xl shadow-xl transition transform group-hover:scale-105 group-hover:rotate-1 duration-300"
    >
      Start Quiz 🚀
    </Link>
  </div>
</div>

  )
}
