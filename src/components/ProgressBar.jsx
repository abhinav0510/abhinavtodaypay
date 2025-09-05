export default function ProgressBar({ current, total }) {
  return (
    <div className="mb-4">
      <p>Question {current} of {total}</p>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div 
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  )
}
