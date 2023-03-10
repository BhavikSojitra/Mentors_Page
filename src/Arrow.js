import { AiOutlineArrowDown } from "react-icons/ai";

function Arrow({ rotateLeft, rotateRight, dataset }) {
  return (
    <div className="imageBottom">
      <div className="flex-arrow">
        <button
          className="downbutton"
          onClick={() => {
            rotateLeft();
          }}
        >
          <AiOutlineArrowDown size={30} />
        </button>

        <div className="image-text-flex">
          <div>
            <img
              src={dataset.image}
              alt="person"
              width={"220px"}
              height={"220px"}
              className="imageanimate"
            />
          </div>

          <div className="mentorName">{dataset.name}</div>
        </div>
        <button
          className="downbutton"
          onClick={() => {
            rotateRight();
          }}
        >
          <AiOutlineArrowDown size={30} />
        </button>
      </div>
    </div>
  );
}

export default Arrow;
