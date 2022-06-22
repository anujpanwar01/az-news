const DataStatus = (props) => {
  const statusHandler = () => props.setIsFetching(false);
  return (
    <>
      {props.fetch && (
        <div className={`status ${props.status}`}>
          {props.children}
          <p className={props.className}>{props.content}</p>

          <button
            className={props.btnClassName}
            onClick={statusHandler}
          ></button>
        </div>
      )}
    </>
  );
};
export default DataStatus;
