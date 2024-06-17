import { useState, useEffect } from 'react'
import {
  Avatar
} from "@material-tailwind/react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import Spinner from '../components/Spinner'

const Overview = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const [headerRes, statisticsRes, goalProgressRes, scheduleRes, weekPlanRes, postsRes] = await Promise.all([
                    fetch('http://localhost:5000/header'),
                    fetch('http://localhost:5000/statistics'),
                    fetch('http://localhost:5000/goalProgress'),
                    fetch('http://localhost:5000/schedule'),
                    fetch('http://localhost:5000/weekPlan'),
                    fetch('http://localhost:5000/posts')
                ]);

                const header = await headerRes.json();
                const statistics = await statisticsRes.json();
                const goalProgress = await goalProgressRes.json();
                const schedule = await scheduleRes.json();
                const weekPlan = await weekPlanRes.json();
                const posts = await postsRes.json();

                setData({ header, statistics, goalProgress, schedule, weekPlan, posts });
                setLoading(false);

            }catch(error){
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    },[]);
    
  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <Spinner loading={loading} />
    </div>
  }
  
  return (
  <> 
      <div className="container mx-auto p-4">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{data.header.title}</h1>
            <p className="text-gray-600">
            {data.header.description}
            </p>
          </div>
          <div className="md:w-1/3">
            <img src={data.header.image} alt="Fitness" className="rounded-lg w-full" />
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {data.statistics.map((stat, index) => (
              <div key={index} className="bg-blue-500 text-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold">Workout</h2>
                <p className="text-3xl">4 hrs</p>
              </div>
              ))}
            </div>

            {/* Goal Progress */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">{data.goalProgress.title}</h2>
              <div className="flex justify-between items-center mb-4">
                <p>Timeframe: {data.goalProgress.timeframe}</p>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
              <div>
                {/* Replace with actual chart */}
                <div className="h-32 bg-gray-200 rounded-lg">Chart goes here</div>
              </div>
            </div>

            {/* Posts */}
            {data.posts.map((post, index) => (
              <div key="index" className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Avatar alt="User Avatar" className="h-10 w-10 rounded-full mr-4" src="https://docs.material-tailwind.com/img/face-2.jpg"/>
                  <div>
                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                    <p className="text-gray-600">{post.author.date}</p>
                  </div>
                </div>
                <p className="mb-4">{post.content}</p>
                <div className="mt-2 text-gray-500 flex space-x-4">
                    <div className='flex items-center space-x-1'>
                      <FaRegHeart /> 
                      <span> {post.stats.views} </span> 
                    </div>
                    <div className='flex items-center space-x-1'>
                      <FaRegComment /> 
                      <span> {post.stats.likes} </span> 
                    </div>
                </div>
                {/* <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    {post.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray-700">{tag}</span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <span className="text-gray-600">{post.stats.views} views</span>
                    <span className="text-gray-600">{post.stats.likes} likes</span>
                  </div>
                </div> */}
              </div>
            ))}
            
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            {/* My Schedule */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{data.schedule.title}</h2>
                <a href="/schedule" className="text-orange-500 hover:text-orange-700">
                  View All &gt;
                </a>
              </div>
                <ul>
                {data.schedule.events.map((event, index) => (
                    <li key={index} className="flex justify-between items-center mb-4">
                    <div>
                        <h3 className="font-bold">{event.day}</h3>
                        <p>{event.activity}</p>
                    </div>
                    <span className="bg-yellow-500 text-white rounded-full px-4 py-2">{event.time}</span>
                    </li>
                ))}
                </ul>
            </div>

            {/* Week Plan */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4">{data.weekPlan.title}</h2>
                <a className="text-orange-500 hover:text-orange-700">
                    Viel All &gt;
                </a>
              </div>
              { data.weekPlan.meals.map((meal, index) => (
                <ul>
                <li key={index} className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold">{meal.day}</h3>
                    <p>{meal.menu}</p>
                  </div>
                  <span className="bg-orange-500 text-white rounded-full px-4 py-2">{meal.time}</span>
                </li>
              </ul>
              )) }              
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Overview