import { useRef, useEffect } from 'react';

function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.load(); // This will load the video when it's in viewport
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
          Illuminate Your Luxury
        </h2>
        <p className="text-xl text-gray-400 mb-8 text-center">
          Witness the elegance of our LED-lit jewelry box in action.
        </p>

        <div className="flex justify-center">
          <video
            ref={videoRef}
            className="w-full max-w-2xl rounded-lg shadow-lg"
            controls
            preload="none"
          >
            <source src="/editedlux.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="container mt-5 mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
          Our Metal Finishes
        </h2>
        <p className="text-xl text-gray-400 mb-8 text-center">
          choose between our two stunning metal finishes.
        </p>

        <div className="flex justify-center">
          <video
            ref={videoRef}
            className="w-full max-w-2xl rounded-lg shadow-lg"
            controls
            preload="none"
          >
            <source src="/finishes.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
