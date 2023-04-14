import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    return (
        <div className='mt-[50px]'>
            <NavLink to={`/blog/${post.id}`}>
                <h3>{post.title}</h3>
            </NavLink>

            <p>By
                <span className='ml-1'>{post.author}</span>
                on{" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span>{post.category}</span>
                </NavLink>
            </p>

            <p>Posted on {post.date}</p>
            <p>{post.content}</p>

            <div>
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className='mx-1'>{`#${tag} |`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails
