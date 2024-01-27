import { forwardRef } from "react";

const TextField = forwardRef((props, ref) => {
  return (
    <div className={`${props.className} relative`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <div className="absolute top-3 left-4">{props.children}</div>
      <input
        ref={ref}
        {...props.input}
        className="py-3 pl-11 pr-4 bg-neutral-90 outline-none rounded"
      />
    </div>
  );
});

export default TextField;
