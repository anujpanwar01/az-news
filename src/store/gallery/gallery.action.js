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
      // dispatch(getGalleryImage([]));
      if (response.errors) {
        console.log(response.errors, "not send");
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
/*
className: "grid-img-19"
img:
alt_description: "gray steel 3-door refrigerator near modular kitchen"
blur_hash: "LhLXPlIUxuax~poLWARjV@xuNGaz"
categories: []
color: "#f3f3f3"
created_at: "2017-01-11T12:22:08-05:00"
current_user_collections: []
description: "We hung that art piece by Tekuma artist Lulu Zheng, and I particularly loved how Lulu combines architecture and organic forms. Even if it is in the background, her 3D elephant brings the focus of the viewer towards her work."
height: 2848
id: "MP0bgaS_d1c"
liked_by_user: false
likes: 3123
links: {self: 'https://api.unsplash.com/photos/MP0bgaS_d1c', html: 'https://unsplash.com/photos/MP0bgaS_d1c', download: 'https://unsplash.com/photos/MP0bgaS_d1c/download?i…wxfHNlYXJjaHwxMHx8aG9tZXxlbnwwfHx8fDE2NTYzMjg4MDQ', download_location: 'https://api.unsplash.com/photos/MP0bgaS_d1c/downlo…wxfHNlYXJjaHwxMHx8aG9tZXxlbnwwfHx8fDE2NTYzMjg4MDQ'}
promoted_at: "2017-01-11T12:22:08-05:00"
sponsorship: null
tags: (3) [{…}, {…}, {…}]
topic_submissions: {interiors: {…}}
updated_at: "2022-06-26T15:01:04-04:00"
urls: {raw: 'https://images.unsplash.com/photo-1484154218962-a1…Hx8aG9tZXxlbnwwfHx8fDE2NTYzMjg4MDQ&ixlib=rb-1.2.1', full: 'https://images.unsplash.com/photo-1484154218962-a1…9tZXxlbnwwfHx8fDE2NTYzMjg4MDQ&ixlib=rb-1.2.1&q=80', regular: 'https://images.unsplash.com/photo-1484154218962-a1…nwwfHx8fDE2NTYzMjg4MDQ&ixlib=rb-1.2.1&q=80&w=1080', small: 'https://images.unsplash.com/photo-1484154218962-a1…bnwwfHx8fDE2NTYzMjg4MDQ&ixlib=rb-1.2.1&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1484154218962-a1…bnwwfHx8fDE2NTYzMjg4MDQ&ixlib=rb-1.2.1&q=80&w=200', …}
user: {id: 'DwCCWPTsFF8', updated_at: '2022-06-27T01:32:24-04:00', username: 'naomish', name: 'Naomi Hébert', first_name: 'Naomi', …}
width: 4288
*/
