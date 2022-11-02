import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './FetchData.css'

const FetchData = ({ cat }) => {

    const [data, setData] = useState("");

    const fetchData = async () => {
        await axios.get(cat ? `https://gnews.io/api/v4/top-headlines?topic=${cat}&token=4f10f4055ec3c99e3986e5acd28d3869&lang=en&country=us&max=10` 
        : `https://gnews.io/api/v4/top-headlines?topic=breaking-news&token=4f10f4055ec3c99e3986e5acd28d3869&lang=en&country=us&max=10`)
            .then((res) => { setData(res.data.articles) });
    };

    useEffect(() => {
        fetchData();
    }, [cat])
    
    return (
        <div className='container my-4'>
            <h3>
                <u>TOP HEADLINES</u>
            </h3>
            <div className='container d-flex justify-content-center align-items-center flex-column my-3' >
                {data ? data.map((newsItem, index) => {

                    const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
                    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
                    const hour = parseInt(date[4].substring(0, 2)); //
                    const time = hour > 12 ? true : false;
                    return <>
                        <div className="newsCard">
                            <img
                                alt={newsItem.title}
                                src={
                                    newsItem.image
                                        ? newsItem.image
                                        : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
                                }
                                className="newsImage"
                            />
                            <div className="newsText">
                                <div>
                                    <span className="title">{newsItem.title}</span>
                                    <br />
                                    <span className="author">
                                        <a href={newsItem.url} target="__blank">
                                            <b>short </b>
                                        </a>{" "}
                                        <span className="muted">
                                            {" "}
                                            by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                                            {time
                                                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                                                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
                                            on {date[2]} {date[1]} {date[3]}, {date[0]}
                                        </span>
                                    </span>
                                </div>
                                <div className="lowerNewsText">
                                    <div className="description">{newsItem.description}</div>
                                    <span className="readmore">
                                        read more at{" "}
                                        <a href={newsItem.url} target="__blank" className="source">
                                            <b>{newsItem.source.name}</b>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                }) : <div style={{ minHeight: "65vh" }}>
                    Loading....
                </div>}
            </div>
        </div>
    )
}
export default FetchData
