import "./CSS/tutorials.css";
export function Tutorials() {
  return (
    <>
      <div className="bg">
        <h1 className="heading">Tutorials</h1>

        {/* Category 1: React Tutorials */}
        <div className="video-category">
          <div className="container">
            <div>
              <img
                src="src/pages/Phonepe Logo Png - Phonepe Logo Transparent Background, Png Download - vhv.jpeg"
                alt="logo"
                className="image"
              />
            </div>
            <div>
              <h2>PhonePe</h2>
            </div>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=2ky-tWGD13Q"
            title="React Tutorial 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          {/* Add more videos in the same category */}
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-react-video-id-2"
            title="React Tutorial 2"
            frameBorder="0"
            allowFullScreen
        ></iframe> */}
        </div>

        {/* Category 2: JavaScript Tutorials */}
        <div className="video-category">
          <div className="container">
            <div>
              <img
                src="https://w7.pngwing.com/pngs/619/303/png-transparent-aadhaar-hd-logo-thumbnail.png"
                alt="logo"
                className="image"
              />
            </div>
            <div>
              <h2>Aadhaar Renewal</h2>
            </div>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://youtu.be/htLwP95Ot7M?si=1Qc_OmIh3Q13HLFf"
            title="JavaScript Tutorial 1"
            frameBorder="0"
            allowFullScreen
          ></iframe>

          {/* Add more videos in the same category */}
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-javascript-video-id-2"
            title="JavaScript Tutorial 2"
            frameBorder="0"
            allowFullScreen
        ></iframe> */}
        </div>

        {/* Add more categories as needed */}
      </div>
    </>
  );
}
