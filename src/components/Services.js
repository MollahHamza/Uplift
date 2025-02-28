import Card from "./Card";

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Access to Fractional Business Experts"
                img="card1.png"  // Existing image
                text="Get on-demand access to experienced business professionals across various industries, providing expert advice without the commitment of full-time hires."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Flexible Co-Working Spaces"
                img="card2.png"  // Existing image
                text="Work in a dynamic and well-equipped environment with high-speed internet, private meeting rooms, and networking opportunities."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Curated Investor and Peer Networking"
                img="card3.png"  // Existing image
                text="Expand your business connections through exclusive networking opportunities with investors, mentors, and entrepreneurs."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Market Research & Intelligence"
                img="card2.png"  // New image placeholder, you can replace with the image used earlier
                text="Make data-driven decisions with our in-depth industry and competitor analysis, consumer behavior studies, and market insights."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
