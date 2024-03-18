interface Props {
  heading: string;
}

function Stories({ heading }: Props) {
  return (
    <>
      <div>
        <h2>{heading}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="image">
        <img src="https://www.aps.edu/sapr/images/gray_box.gif/image" />
      </div>
    </>
  );
}

export default Stories;
