import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FigCap,
  Figure,
  Image,
  ImgContainer,
  TextContainer,
  BtnContainer,
  Auther,
  Tags,
} from "./imgDetail.styles";
import { AiOutlineLike } from "react-icons/ai";
import { SiGooglephotos } from "react-icons/si";
import { BsTags } from "react-icons/bs";

const ImgDetail = (props) => {
  const { imgId } = useParams();
  const [hover, setHover] = useState("download");

  const findImg = props.img.find((image) => image.id === imgId);
  console.log(imgId, findImg, hover);

  return (
    <Image>
      <ImgContainer $imgUrl={findImg?.urls?.raw}>
        <TextContainer>
          <div>
            <h3>{findImg.description}</h3>
            <Tags>
              {findImg.tags.map((tag, i) => (
                <div key={i}>
                  <BsTags size={16} />
                  <p>{tag.title}</p>
                </div>
              ))}
            </Tags>
            <BtnContainer>
              <a
                href={findImg.links.download}
                className="download"
                hover={hover}
                target="_blank"
                rel="noreferrer"
                onMouseOver={() => {
                  setHover("auth");
                }}
                onMouseOut={() => {
                  setHover("download");
                }}
              >
                Download
              </a>
              <a
                href={findImg.user?.self}
                className="photograph"
                hover={hover}
                target="_blank"
                rel="noreferrer"
                onMouseOver={() => setHover("download")}
                onMouseDown={() => setHover("download")}
              >
                PhotoGrapher
              </a>
            </BtnContainer>
          </div>
        </TextContainer>
        <Auther>
          <img
            src={findImg.user?.profile_image?.medium}
            alt={findImg.username}
          />
          <img
            className="img-2"
            src={findImg.user?.profile_image?.medium}
            alt={findImg.username}
          />
          <div>
            <p>{new Date(findImg.user?.updated_at).toUTCString()}</p>
            <h4>{findImg.user?.first_name + " " + findImg.user?.last_name}</h4>
            <p>{findImg.user?.location}</p>
            <figure>
              <div className="total-like">
                <AiOutlineLike size={16} />
                <p>{findImg.user?.total_likes}</p>
              </div>
              <div className="total-photo">
                <SiGooglephotos size={16} />
                <p>{findImg.user?.total_photos}</p>
              </div>
            </figure>
          </div>
        </Auther>
      </ImgContainer>
    </Image>
  );
};
export default ImgDetail;
