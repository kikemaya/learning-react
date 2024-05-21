import { useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState({
    name: "Dexter",
    age: 5,
  });

  const handleIncreaseAge = () => {
    // setCat({ ...cat, age: cat.age + 1 });
    setCat((prevData) => ({ ...prevData, age: cat.age + 1 }));
  };

  return (
    <>
      <h2>
        {cat.name} - {cat.age}
      </h2>
      <button onClick={handleIncreaseAge} className="btn btn-dark mb-2">
        Update age
      </button>
    </>
  );
};

export default Cat;
