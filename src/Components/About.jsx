import web2 from '../assets/web2.jpg';

const About = ({id}) => {
    <section className="about" id={id}>
        <h1 className="heading"><span className="span">about</span> us</h1>
        <div className="row">
            <div className="image">
                <img src={web2} alt="About Us" />
            </div>
            <div className="content">
                <h3>What's makes our meals special</h3>
                <p>Lorem ipsum dolor sit amet consectetur...</p>
                <p>Debitis neque doloribus aspernatur fugiat...</p>
                <a href="#" className="btn">learn more</a>
            </div>
        </div>
    </section>
}

export default About;