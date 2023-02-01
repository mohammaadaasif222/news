import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                    <span className="badge rounded-pill bg-dark">{source}</span>
                </div>
                <img src={!imageUrl ? "https://bsmedia.business-standard.com/_media/bs/img/article/2022-07/20/full/1658327864-3565.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{!description ? "Maruti Suzuki India aims to export the model to more than 60 countries across Latin America, Africa, Middle East, ASEAN and neighboring regions" : description}</p>
                    <p class="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
