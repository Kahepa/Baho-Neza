import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/blog/${id}`);
        setBlog(response.data);
        setComments(response.data.comments || []);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(`/blog/${id}/comments`, { comment });
      setComments([...comments, response.data]);
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={blog.author.avatar}
            alt={blog.author.name}
          />
          <div>
            <h2 className="text-lg font-bold">{blog.author.name}</h2>
            <p className="text-gray-600">{blog.author.date}</p>
          </div>
        </div>
        <p className="mb-4">{blog.content}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            {blog.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-gray-700">{tag}</span>
            ))}
          </div>
          <div className="flex space-x-4">
            <span className="text-gray-600">{blog.stats.views} views</span>
            <span className="text-gray-600">{blog.stats.likes} likes</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-bold mb-4">Comments</h3>
        <div className="mb-4">
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 mb-4">
              <p>{comment.text}</p>
              <p className="text-sm text-gray-600">{comment.author}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mr-2"
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
