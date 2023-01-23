import { useState } from "react";

function PokemonCard(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="p-4 bg-yellow-400">
      <button
        className="bg-white btn p-2 mb-1 rounded-none border-red-700 border-2 shadow-xl text-black"
        onClick={() => setToggle(!toggle)}
      >
        {props.name}
      </button>
      <div className="bg-white p-4">
        <a href={props.details.url}>
          <img
            className="m-auto bg-black"
            src={props.details.sprites.front_default}
            alt=""
          />
        </a>
        {toggle && (
          <>
            <div className="animate-ProjectPopUp bg-white border-4 border-red-700 shadow-2xl shadow-black rounded-lg p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
              <button
                className="absolute top-2 right-2 m-2"
                onClick={() => setToggle(!toggle)}
              >
                ❌
              </button>
              <a href={props.details.url}>
                <img
                  className="m-auto h-60 bg-black"
                  src={props.details.sprites.front_default}
                  alt=""
                />
              </a>
              <p className="mt-2 border-y-2 border-red-600">
                # {props.details.id}
              </p>
              <div className="border-y-2  border-red-600">
                <p>Abilities:</p>
                <p className="w-fit m-auto text-xs">
                  {props.details.abilities
                    .map((ability) => ability.ability.name)
                    .join(", ")}
                </p>
                <p className="w-fit m-auto text-xs my-2 border-y-2 border-red-600">
                  {props.moreDetails.flavor_text_entries[0].flavor_text.replace(
                    "",
                    ""
                  )}
                </p>
                <p className="text-xs">
                  Type:{" "}
                  {props.moreDetails.egg_groups
                    .map((group) => group.name)
                    .join(", ")}
                </p>
                <p className="text-xs">
                  Habitat: {props.moreDetails.habitat.name}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
