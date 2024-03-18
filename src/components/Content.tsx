import { useState } from "react";

function Content() {
  const [sections] = useState([
    {
      title: "01 Testimonial Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      title: "01 Testimonial Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ]);

  const [photoSect] = useState([
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTl0c-21RNHrGJ4u_ftdg16GuGB7ZZwHO2uX8rWA6529QMHAxAwzNYptK8kE1Bbi-rDo&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTl0c-21RNHrGJ4u_ftdg16GuGB7ZZwHO2uX8rWA6529QMHAxAwzNYptK8kE1Bbi-rDo&usqp=CAU",
    },
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <div className="sections">
            {sections.map((section, i) => (
              <div key={i} className="sect">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
          <div className="image-sect">
            {photoSect.map((photoSect, i) => (
              <img src={photoSect.img} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
