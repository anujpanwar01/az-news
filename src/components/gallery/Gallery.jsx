import { useState } from "react";
import { Image, Loader } from "./Gallery.styles";

const Galleries = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Image className={props.className} to={props.img.id}>
      {!imageLoaded && (
        <Loader>
          <div className="image"></div>
        </Loader>
      )}

      <img
        src={props.img.urls.raw}
        alt={props.img.alt_description}
        style={imageLoaded ? { display: "flex" } : { display: "none" }}
        onLoad={setImageLoaded}
      />
      {imageLoaded && <figcaption>{props.img.user.name}</figcaption>}
    </Image>
  );
};
export default Galleries;
/*
alt_description: "black floor lamp on living room sofa"
blur_hash: "LFLqe8QlM|x]~W4TtSVrpd.9DiW;"
categories: []
color: "#d9d9d9"
created_at: "2018-04-26T12:07:35-04:00"
current_user_collections: []
description: "workspace"
height: 2508
id: "FV3GConVSss"
liked_by_user: false
likes: 3863
links: {self: 'https://api.unsplash.com/photos/FV3GConVSss', html: 'https://unsplash.com/photos/FV3GConVSss', download: 'https://unsplash.com/photos/FV3GConVSss/download?i…HNlYXJjaHwxMHx8b2ZmaWNlfGVufDB8fHx8MTY1NjE3MTk5OA', download_location: 'https://api.unsplash.com/photos/FV3GConVSss/downlo…HNlYXJjaHwxMHx8b2ZmaWNlfGVufDB8fHx8MTY1NjE3MTk5OA'}
promoted_at: "2018-04-27T08:24:09-04:00"
sponsorship: null
tags: (3) [{…}, {…}, {…}]
topic_submissions: {interiors: {…}, business-work: {…}, architecture-interior: {…}}
updated_at: "2022-06-25T07:03:10-04:00"
urls: {raw: 'https://images.unsplash.com/photo-1524758631624-e2…b2ZmaWNlfGVufDB8fHx8MTY1NjE3MTk5OA&ixlib=rb-1.2.1', full: 'https://images.unsplash.com/photo-1524758631624-e2…WNlfGVufDB8fHx8MTY1NjE3MTk5OA&ixlib=rb-1.2.1&q=80', regular: 'https://images.unsplash.com/photo-1524758631624-e2…fDB8fHx8MTY1NjE3MTk5OA&ixlib=rb-1.2.1&q=80&w=1080', small: 'https://images.unsplash.com/photo-1524758631624-e2…ufDB8fHx8MTY1NjE3MTk5OA&ixlib=rb-1.2.1&q=80&w=400', thumb: 'https://images.unsplash.com/photo-1524758631624-e2…ufDB8fHx8MTY1NjE3MTk5OA&ixlib=rb-1.2.1&q=80&w=200', …}
user: {id: 'zYw2OJ152h8', updated_at: '2022-06-25T11:31:22-04:00', username: 'heftiba', name: 'Toa Heftiba', first_name: 'Toa', …}
width: 3762
*/
