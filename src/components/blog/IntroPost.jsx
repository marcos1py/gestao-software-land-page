import React from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPost({ post }) {
  const navigate = useNavigate();

  return (
    <div className='mx-auto w-1/3  mt-10 px-10 md:px-15 lg:px-32 border border-gray-300'
         onClick={() => navigate('blog-detail/' + post.id)}>
      <img src={post.coverImage} className='rounded-2xl object-cover w-full h-full' />
      <div className=''>
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='line-clamp-6 text-gray-400 mt-5'>{post.desc}</h4>
        <div className='flex items-center mt-5'>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.euax.com.br%2Fc%2Fteste-de-maturidade-de-ti%2F&psig=AOvVaw36DdAx4BUrGqJOG1U30hck&ust=1704822463378000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODNrN2szoMDFQAAAAAdAAAAABAD"
            className='w-[50px] rounded-full'
          />
          <div className='ml-2'>
            <h3 className='font-bold '>Tubeguruji</h3>
            <h3 className='text-gray-500'>24 Sept 2024</h3>
          </div>
        </div>
        <h4 className='text-blue-500'>tag: {post.tag}</h4>
      </div>
    </div>
  );
}

export default IntroPost;
