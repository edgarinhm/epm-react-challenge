import { useEffect } from "react";
import { useMemo, useState } from "react";

const data = {
  Colombia: "Bogotá",
  Ecuador: "Quito",
  Peru: "Lima",
  Brazil: "Brasilia",
  Argentina: "Buenos Aires",
  Chile: "Santiago",
  Venezuela: "Caracas",
  Paraguay: "Asunción",
  Uruguay: "Montevideo",
  Bolivia: "La Paz",
  Guyana: "Georgetown",
  Suriname: "Paramaribo",
  FrenchGuiana: "Cayenne",
  FalklandIslands: "Stanley",
  Mexico: "Mexico City",
  Guatemala: "Guatemala City",
  Belize: "Belmopan",
  ElSalvador: "San Salvador",
  Honduras: "Tegucigalpa",
  Nicaragua: "Managua",
  CostaRica: "San José",
  Panama: "Panama City",
  Cuba: "Havana",
  Jamaica: "Kingston",
  Haiti: "Port-au-Prince",
};

export const CountryMatchGame = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [validMath, setValidMath] = useState([]);

  const [options, setOptions] = useState(
    Object.entries(data)
      .flat()
      .sort(() => Math.random() - 0.5)
  );

  const handleClickedOption = (option) => {
    if (selectedOptions.length === 2) {
      setSelectedOptions([]);
    }
    setSelectedOptions((state) => [...state, option]);
    if (selectedOptions.length === 1) {
      const [option1] = selectedOptions;
      validateMatch(option1, option);
    }
  };

  const validateMatch = (option1, option2) => {
    if (data[option1] === option2 || data[option2] === option1) {
      setValidMath((state) => [...state, option1, option2]);
      setSelectedOptions([]);
    }
  };

  const getBackgroundColor = (option) => {
    if (validMath.includes(option)) {
      return "green";
    } else if (
      selectedOptions.length === 1 &&
      selectedOptions.includes(option)
    ) {
      return "#000fff";
    } else if (
      selectedOptions.length >= 2 &&
      selectedOptions.includes(option)
    ) {
      return "#fff000";
    } else {
      return "#fff";
    }
  };

  const getColor = (option) => {
    if (
      validMath.includes(option) ||
      (selectedOptions.length === 1 && selectedOptions.includes(option))
    ) {
      return "#fff";
    } else if (
      selectedOptions.length >= 2 &&
      selectedOptions.includes(option)
    ) {
      return "red";
    } else {
      return "#000";
    }
  };

  useEffect(() => {
    const filterValidOptions = (state) => {
      return state.filter((option) => !validMath.includes(option));
    };

    const timeout = setTimeout(() => {
      setOptions((state) => [...filterValidOptions(state)]);
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [validMath]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      {options.map((option) => (
        <div style={{ display: "flex", gap: "0.5rem" }} key={option}>
          <button
            style={{
              backgroundColor: getBackgroundColor(option),
              color: getColor(option),
              border: "1px solid black",
              padding: "0.5rem",
              cursor: "pointer",
            }}
            onClick={() => handleClickedOption(option)}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
};
