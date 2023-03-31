import { useState } from "react";

export const useCalculator = () => {
	const [value, setValue] = useState("");
	// const [result, setResult] = useState("");

	const handleInput = (v) => {
		if (v == "=" && value != "") {
			try {
				const result = eval(value);
				if(result % 1 === 0) {
					setValue(result);
				} else {
					setValue(result.toFixed(2));
				}
			} catch {
				setValue("Syntax ERROR");
			}
		} else if (v == "C") setValue("");
		else if (v != "=" && v != "C" && value != "Syntax ERROR")
			setValue(`${value}${v}`);
		else if (v != "=" && v != "C" && value == "Syntax ERROR") setValue(v);
	};
	return { value, handleInput };
};
