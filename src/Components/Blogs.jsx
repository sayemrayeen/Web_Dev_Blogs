import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
// import './Blogs.css';
const Blogs = () => {
    //consume data
    const { loading, posts } = useContext(AppContext);
    return (
        <div className='11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
            {loading ? (<Spinner />) : (
                posts.length === 0 ? (
                    <div>No Post Found </div>
                ) : (posts.map((post) => (
                    <BlogDetails key={post.id} post={post} />
                )))
            )}
        </div>
    )
}

export default Blogs
