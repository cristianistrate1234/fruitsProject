import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import blog from "./blog.css"
import {Card} from "react-bootstrap";
import ContentCardObject from "./contentCardObject";

function CardBlog() {
    return (
        <div>
          <div className={"title"}>
            <h2 className={"title-text-teme"} >From The Blog</h2>
            <svg className={"rectangle"}>
              <rect/>
            </svg>
          </div>
          {/*  <h2 className={"title"}>From The Blog</h2>*/}
          {/*<svg className={"rectangle"}>*/}
          {/*  <rect/>*/}
          {/*</svg>*/}

  <div className={"container-box-card-item"}>
            <div className={"card-ContentCardObject"}>
                    {ContentCardObject.map((content, item) => {
                        return (

                            <div key={item} className={"card-box-object-create"}>
                              <div className={"container-card-img"}>
                                <img className={"img"} src={content.img}/>
                              </div>
                              <div className={"card-icon-Container"}>
                                <div className={"icon-item"}>
                                  <img className={"icon-calendar"} src={content.iconCalendar}/>
                                  <span className={"info-how-many"}>{content.calendarText}</span>
                                  <img className={"icon-comment"} src={content.iconComment}/>
                                  <span className={"info-how-many"}>{content.commentText}</span>
                                </div>
                              </div>
                              <h3 className={"card-SubTitle"}>{content.titleCard}</h3>
                              <p className={"card-Text-Content"}>{content.textCard}</p><a className={"rend-more"}>{content.more}</a>
                            </div>


                    )
                    })}
            </div>
            </div>
        </div>

    );
}

export default CardBlog;