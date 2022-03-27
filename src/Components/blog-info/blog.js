import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import blog from "./blog.css"
import {Card} from "react-bootstrap";
import ContentCardObject from "./contentCardObject";

function CardBlog() {
    return (
        <div>
            <h2 className={"title"}>From The Blog</h2>
            <div>
                <svg className={"rectangle"}>
                    <rect/>
                </svg>
            </div>
            <div className={"container-card-item"}>
                    {ContentCardObject.map((content, item) => {
                        return (
                            <div key={item} className={"card-box"}>
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
                                <Card.Text className={"card-Text-Content"}>{content.textCard}</Card.Text>
                            </div>
                    )
                    })}
            </div>
        </div>

    );
}

export default CardBlog;