import React from 'react';
// ... (imports)

const PostNavigation = ({ prevLink, prevTitle, nextLink, nextTitle }) => {
    return (
      <div className="flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white p-8 rounded-lg ">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Navegação de Postagens</h2>
          </div>
          <div className="flex justify-between">
            {prevLink && (
              <div className="w-1/2 pr-2 elementor-post-navigation__prev elementor-post-navigation__link text-left">
                <a href={prevLink} rel="prev">
                  <span className="post-navigation__arrow-wrapper post-navigation__arrow-prev">
                    <i className="fa fa-angle-left" aria-hidden="true"></i>-
                  </span>
                  <span className="elementor-post-navigation__link__prev">
                    <span className="post-navigation__prev--label text-blue-700"> Anterior</span><br/>
                    <span className="post-navigation__prev--title">{prevTitle}</span>
                  </span>
                </a>
              </div>
            )}
            {nextLink && (
              <div className={`w-1/2 pl-2 elementor-post-navigation__next elementor-post-navigation__link text-right ${!prevLink ? 'ml-auto' : ''}`}>
                <a href={nextLink} rel="next">
                  <span className="post-navigation__arrow-wrapper post-navigation__arrow-next">
                    <span className="elementor-screen-only text-blue-700">Próximo</span>
                    -<i className="fa fa-angle-right" text-blue-700 aria-hidden="true"></i>
                  </span>
                  <br/>
                  <span className="elementor-post-navigation__link__next">
                    <span className="post-navigation__next--title">{nextTitle}</span>
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default PostNavigation;
  