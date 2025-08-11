import web4 from '../assets/web4.webp';
import logo2 from '../assets/logo2.png';
import student2 from '../assets/student.jpg';

const reviews = [
    {
        name: "Jnnat Sultana",
        text: "I love this online ordering system. It makes my life so much easier!",
        img: web4,
        rating: 4.5,
    },
    {
        name: "Korim Uddin",
        text: "Where has this been all my life? I can now order food without leaving my home.",
        img: student2,
        rating: 3.5,
    },
];

const Review = () => (
    <section className="review" id="review">
        <h1 className="heading">Customer's <span className="spa"> Review</span></h1>
        <div className="box-container">
            {reviews.map((review, index) => (
                <div className="box" key={index}>
                    <img src={logo2} className="quote" />
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
