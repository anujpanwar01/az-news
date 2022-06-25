import { getGalleryImage, setNotification } from "./gallery.slice";

export const fetchImgHandler = (url) => {
  return async (dispatch) => {
    dispatch(
      setNotification({
        isLoading: true,
        error: "",
      })
    );
    const imgHandler = async () => {
      const res = await fetch(`${url}`);
      const data = await res.json();
      return data.results;
    };
    try {
      const response = await imgHandler();
      if (response.errors) {
        console.log(response.errors);
        dispatch(
          setNotification({
            isLoading: false,
            error: response.errors,
          })
        );
      } else {
        dispatch(getGalleryImage(response));
        dispatch(
          setNotification({
            isLoading: false,
            error: "",
          })
        );
      }
    } catch (err) {
      console.log(err.message);
      dispatch(
        setNotification({
          isLoading: false,
          error: err.message,
        })
      );
    }
  };
};
