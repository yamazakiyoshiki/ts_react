import { useRef, forwardRef, useImperativeHandle } from "react";

type refMethodType = {
  myFocus: () => void;
};

const Input = forwardRef((props, ref: React.Ref<refMethodType>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    myFocus: () => {
      inputRef.current?.focus();
    },
  }));
  return <input type="text" ref={inputRef} />;
});

const Example3 = () => {
  const ref = useRef<refMethodType>(null);
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current?.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example3;
