import Post from '../post/Post'
import './posts.scss'
import {  useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Posts = () => {
  
  const { isLoading, error, data } = useQuery(["posts"], () =>
  makeRequest.get("/posts").then((res) => {
    return res.data;
  })
);
  
   console.log(data)
   { if (error) return 'An error has occurred: ' + error.message};
  return (
    <div className='posts'>
      {error
        ? 'Something is wrong' + error.message
        : isLoading
        ? 'Loading...'
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default Posts
