const reviews = [
    {
        name: "Jeeny Winget",
        text: "Lorem ipsum dolor sit amet...",
        img: "web4.webp",
        rating: 4.5,
    },
    {
        name: "David Smith",
        text: "Another satisfied customer...",
        img: "web4.webp",
        rating: 3.5,
    },
];

const Review = () => (
    <section className="review" id="review">
        <h1 className="heading">Customer's <span className="spa"> Review</span></h1>
        <div className="box-container">
            {reviews.map((review, index) => (
                <div className="box" key={index}>
                    <img src="web3.jpeg" className="quote" />
                    <p>{review.text}</p>
                    <img src={review.img} className="user" />
                    <h3>{review.name}</h3>
                    <div className="stars">
                        {[...Array(Math.floor(review.rating))].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                        {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                    </div>
                </div>
            ))}
        </div>
        <div className="review-buttons">
            <a href="#" className="btn">See More Reviews</a>
            <a href="#" className="btn">Rate Us</a>
        </div>
    </section>
);

export default Review;
