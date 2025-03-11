import React from 'react';

const Compartilhar = () => {
  const currentURL = window.location.href;
  const shareMessage = 'Olha esse tema que achei interessante:';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${currentURL}&text=${encodeURIComponent(shareMessage)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${currentURL}&title=${encodeURIComponent(shareMessage)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareMessage} ${currentURL}`)}`, '_blank');
  };

  const shareViaEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(shareMessage)}&body=${encodeURIComponent(`Corpo do email ${currentURL}`)}`, '_blank');
  };

  return (
    <div className="flex flex-col items-center mt-6 p-4 rounded-md">
      <h2 className="text-lg font-bold mb-2">Compartilhe:</h2>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" >
          <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
        </button>
        <button className="bg-blue-300 text-white py-2 px-4 rounded" onClick={shareOnTwitter}>
          <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
        </button>
        <button className="bg-blue-700 text-white py-2 px-4 rounded" >
          <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={shareOnWhatsApp}>
          <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
        </button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded" onClick={shareViaEmail}>
          <i className="fa fa-envelope-o" aria-hidden="true"></i> Email
        </button>
      </div>
    </div>
  );
};

export default Compartilhar;
