import React from 'react'

const Workout = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-blue-500 text-white p-8">
        <h1 className="text-4xl font-bold">Start Your Workout From Today</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>

      <section className="bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-blue-200 p-4 rounded text-center">
            <p className="text-xl font-bold">15</p>
            <p>hours</p>
          </div>
          <div className="bg-blue-200 p-4 rounded text-center">
            <p className="text-xl font-bold">550</p>
            <p>Kcal</p>
          </div>
          <div className="bg-blue-200 p-4 rounded text-center">
            <p className="text-xl font-bold">15</p>
            <p>Poses</p>
          </div>
          <div className="bg-blue-200 p-4 rounded text-center">
            <p className="text-xl font-bold">5</p>
            <p>Sets</p>
          </div>
          <div className="bg-blue-200 p-4 rounded text-center">
            <p className="text-xl font-bold">5</p>
            <p>Sets</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8">
        <h2 className="text-2xl font-bold mb-4">Popular Exercises</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded overflow-hidden shadow-lg">
          <iframe width="480" height="500" 
            src="https://www.youtube.com/embed/MqHqYpbQ19g" allowfullscreen> 
            </iframe>
            <div className="p-4">
              <h3 className="text-lg font-bold">Treadmill</h3>
              <p className="text-gray-500">250 est calories</p>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-lg">
          <iframe width="480" height="500" 
            src="https://www.youtube.com/embed/d6YW-GUD78E">
            </iframe>
            <div className="p-4">
              <h3 className="text-lg font-bold">Stretching</h3>
              <p className="text-gray-500">250 est calories</p>
            </div>
          </div>
          <div className="bg-white rounded overflow-hidden shadow-lg">
          <iframe width="480" height="300" src="https://www.youtube.com/embed/ZLmUDtbe1O8">
          </iframe>
            <div className="p-4">
              <h3 className="text-lg font-bold">Yoga</h3>
              <p className="text-gray-500">250 est calories</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Workout