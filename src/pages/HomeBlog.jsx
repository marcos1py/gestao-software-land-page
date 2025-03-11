import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import Navbar from "../components/Navbar";
import Header from "../components/blog/Header";
import Search from "../components/blog/Search";
import IntroPost from "../components/blog/IntroPost";
import Blogs from "../components/blog/Blogs";
import GlobalApi from "../Services/GlobalApi";
import Footer from "../components/blog/Footer";

function HomeBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterTag, setFilterTag] = useState("All");

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const resp = await GlobalApi.getPost();
      const result = resp.data.data.map((item) => ({
        id: item.id,
        title: item.title,
        conteudo: item.conteudo,
        tag: item.tag,
        coverImage: item.coverImage,
        creationDate: item.creationDate,
      }));
      setPosts(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const filterPosts = (tag) => {
    setFilterTag(tag);
  };

  const filteredPosts =
    filterTag === "All"
      ? posts
      : posts.filter((item) => item.tag === filterTag);

  return (
    <div className="">
      <main className="background">
        <Header />
        <div className="text-center align-top text-lg">
          <h1 className="text-4xl font-bold text-black my-4">Blog</h1>
        </div>
        <Search className="" selectedTag={filterPosts} />

        {loading ? (
          <div className="fixed top-11 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <Blogs posts={filteredPosts} />
        )}
      </main>

      {!loading && (
          <>
            <div className="backgrond mt-12" id="footer">
              <Footer />
            </div>
          </>
        )}
    </div>
  );
}

export default HomeBlog;
