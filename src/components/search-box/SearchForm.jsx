import React from "react";

const SearchForm = React.forwardRef(
  (
    { className, submitHandler, inputRef, labelFor, children, ...props },
    ref
  ) => {
    return (
      <form className={className} onSubmit={submitHandler}>
        <input {...props} ref={ref} />
        <button type="submit">{children}</button>
      </form>
    );
  }
);
export default SearchForm;
