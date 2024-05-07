import CalcProvider from "../context/CalcContext";
import Input from "../referctor/Input";
import Result from "../referctor/Result";
import Select from "../referctor/Select";

const Practice2 = () => {
  return (
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Practice2;
