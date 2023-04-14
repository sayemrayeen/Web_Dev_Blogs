import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

// step1 
export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    //data filling
    async function fetchBlogPosts(page = 1, tag = null, category) {
        // let url = `${baseUrl}?page=${page}`;
        let url = `${baseUrl}?page=${page}`;
        if (tag) {
            url += `&tag=${tag}`
        }

        if (category) {
            url += `&category=${category}`
        }

        setLoading(true);
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log("data", data);

            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        navigate({ search: `?page=${page}` })
        setPage(page);
    }

    const value = {
        posts, setPosts, loading, setLoading, page, setPage, totalPages, setTotalPages, handlePageChange, fetchBlogPosts
    };


    // step2 
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}