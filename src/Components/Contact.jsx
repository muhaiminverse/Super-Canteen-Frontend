const Contact = () => (
    <section className="contact" id="contact">
        <h1 className="heading"><span>Contact </span>Us</h1>
        <div className="row">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=..." allowFullScreen="" loading="lazy"></iframe>
            <div className="form-contact">
                <h3>Share your Thought or ask anything</h3>
                <div className="inputbox">
                    <span className="fas fa-user"></span>
                </div>
                <div className="socials">
                    <p><i className="fab fa-whatsapp"></i> 017********</p>
                    <p><i className="fab fa-facebook"></i> facebook.com/yourprofile</p>
                    <p><i className="fab fa-twitter"></i> twitter.com/yourhandle</p>
                    <p><i className="fas fa-phone-alt"></i> +8809876543210</p>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
