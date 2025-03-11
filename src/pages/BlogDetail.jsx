import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GlobalApi from "../Services/GlobalApi";
import Header from "../components/blog/Header";
import Footer from "../components/blog/Footer";
import Compatilhar from "../components/blog/Compatilhar";
import PostNavigation from "../components/blog/PostNavigation";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [postAnterior, setPostAnterior] = useState({});
  const [postProximo, setPostProximo] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogDetails = async () => {
      try {
        const response = await GlobalApi.getPostById(id);
        const item = response.data;
        const result = {
          id: item.data.id,
          title: item.data.title,
          conteudo: item.data.conteudo,
          tag: item.data.tag,
          coverImage: item.data.coverImage,
          creationDate: item.data.creationDate,
        };
        setPost(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    const getBlogAdjacent = async (adjacentId, setAdjacentPost) => {
      try {
        const response = await GlobalApi.getPostById(adjacentId);
        const item = response.data;
        const result = {
          id: item.data.id,
          title: item.data.title,
        };
        setAdjacentPost(result);
      } catch (error) {
        console.error("Error fetching adjacent post:", error);
      }
    };

    const getBlogDetailsAndAdjacent = async () => {
      await getBlogDetails();

      const idAnterior = parseInt(id, 10) - 1;
      const idProximo = parseInt(id, 10) + 1;

      await getBlogAdjacent(idAnterior, setPostAnterior);
      await getBlogAdjacent(idProximo, setPostProximo);
    };

    getBlogDetailsAndAdjacent();
  }, [id]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title}</title>
        {post.conteudo && (
          <meta name="description" content={post.conteudo.substring(0, 18)} />
        )}
        <meta name="keywords" content={post.tag} />
      </Helmet>

      <main className="backgrond">
        <Header />
        <div className="min-h-[30vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
          {loading ? (
            <div className="loading-spinner fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center mb-5">
              <h1 className="text-4xl font-bold my-4">{post.title}</h1>
              <span className="text-sm">{post.creationDate}</span>
            </div>
          )}
        </div>
      </main>
      <svg
        class="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" >
          <g transform="translate(-1.000000, -1.0001)" >
            <g class="wave" fill="#0B1D41">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
          </g>
        </g>
      </svg>
      <div className="parent-container">
        {loading ? (
          <div className="loading-spinner fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="post-content max-w-4xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-md">
            <img
              src={post.coverImage}
              className="w-full h-64 object-cover rounded-md mb-6"
              alt="Blog Cover"
            />
            <p
              className="text-gray-700 text-lg leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: post.conteudo || "" }}
            ></p>
          </div>
        )}

        {!loading && (
          <>
            <Compatilhar />
            <PostNavigation
              prevLink={
                postAnterior.id ? `/blog/blog-detail/${postAnterior.id}` : null
              }
              prevTitle={postAnterior.title || ""}
              nextLink={
                postProximo.id ? `/blog/blog-detail/${postProximo.id}` : null
              }
              nextTitle={postProximo.title || ""}
            />
            <div className="backgrond mt-12" id="footer">
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BlogDetail;
