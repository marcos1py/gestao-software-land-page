import React from 'react';
import { useNavigate } from 'react-router-dom';

function Blogs({ posts }) {
  const navigate = useNavigate();

  return (
    <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
      {posts.map((item) => (
        <div
          key={item.id}
          className='m-4 cursor-pointer border border-gray-300 rounded-lg p-4 shadow-md' 
          onClick={() => navigate('blog-detail/' + item.id)}
        >
          <img src={item.coverImage} className='w-full rounded-2xl object-cover h-[200px]' />
          
          <h3 className='font-bold mt-3'>{item.title}</h3>
          <h3 className='line-clamp-3 text-gray-600 mt-3'>{item.conteudo}</h3>
          <div className='flex items-center mt-5'>
            <div className='ml-2'>
              <h3 className='text-gray-500 text-[10px]'>{item.creationDate}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
