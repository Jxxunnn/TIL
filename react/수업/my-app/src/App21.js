import React, { useState, useRef } from "react";

const App = () => {
  const [자기소개, set자기소개] = useState(
    "제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다."
  );
  const nameInput = useRef(null);
  const sexInput = useRef(null);
  const ageInput = useRef(null);

  return (
    <>
      <label>
        이름 : <input ref={nameInput} type="text" />
      </label>
      <label>
        성별 : <input ref={sexInput} type="text" />
      </label>
      <label>
        나이 : <input ref={ageInput} type="text" />
      </label>
      <button
        onClick={() => {
          const content = ` 제 이름은 ${nameInput.current.value}입니다. 저는
          ${sexInput.current.value}
          이고요. 나이는 ${ageInput.current.value}
          살입니다.`;
          set자기소개(content);
        }}
        type="submit"
        style={{ width: "100px" }}
      >
        제출
      </button>
      <h1>{자기소개}</h1>
    </>
  );
};

export default App;
