import Button from "./Button";
import Input from "./Input";
import { useCalculator } from "../hook/useCalculator";

const Container = () => {
  const { value, handleInput } = useCalculator()
	return (
		<section className="card">
			{/* {result == "" ? <Input value={value} /> : <Input value={result} />
		} */}
			<Input value={value} />
		
				<Button onClick={() => handleInput("C")} value="C" />
				<Button onClick={() => handleInput("/")} value="/" />
				<Button onClick={() => handleInput("*")} value="*" />
				<Button onClick={() => handleInput("-")} value="-" />
			
		
				<Button onClick={() => handleInput("7")} value="7" />
				<Button onClick={() => handleInput("8")} value="8" />
				<Button onClick={() => handleInput("9")} value="9" />
				<Button onClick={() => handleInput("+")} value="+" />
			
		
				<Button onClick={() => handleInput("4")} value="4" />
				<Button onClick={() => handleInput("5")} value="5" />
				<Button onClick={() => handleInput("6")} value="6" />
			
		
				<Button onClick={() => handleInput("1")} value="1" />
				<Button onClick={() => handleInput("2")} value="2" />
				<Button onClick={() => handleInput("3")} value="3" />
				<Button onClick={() => handleInput("=")} value="=" />
			
		
				<Button onClick={() => handleInput("0")} value="0" />
				<Button onClick={() => handleInput(".")} value="." />
			
		</section>
	);
};
export default Container;
