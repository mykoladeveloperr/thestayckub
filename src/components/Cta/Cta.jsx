import './Cta.scss'

export default function Cta () {
    return (
        <section className="cta section">
            <div className="container">
                <h2 className="text-center cta__title">Tell us about your requirements</h2>
                <div className="cta__content bg-light p-3 rounded-3 p-xl-5 rounded-xl-5">
                    <form className="form">
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label htmlFor="name" className="label">Name*</label>
                                <input type="text" className="form-control" placeholder="Your full name" required id="name" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="organisation" className="label">Organisation*</label>
                                <input type="text" className="form-control" placeholder="University or company" required id="organisation"/>
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="email" className="label">Email*</label>
                                <input type="email" className="form-control" placeholder="you@organisation.com" required id="email" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="phone" className="label">Phone*</label>
                                <input type="tel" className="form-control" placeholder="+44 000 000 000" required id="phone" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="size" className="label">Group Size</label>
                                <input type="text" className="form-control" placeholder="e.g. 20-30 students" required size="size" />
                            </div>
                            <div className="col-12 col-md-6">
                                <label htmlFor="dates" className="label">Dates</label>
                                <input type="text" className="form-control" placeholder="e.g. June - August 2026" required id="dates" />
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                            <div className="col-12">
                                <label htmlFor="message" className="label">Message</label>
                                <textarea className="form-control" name="message" id="message" placeholder="Tell us more about your programme, specific requirements or any questions..."></textarea>
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-nowrap gx-2">
                                            <div style={{marginRight: "1rem"}}>
                                                <i className="bi bi-info-circle"></i>
                                            </div>
                                            <div>
                                                <h6 className="card-title">Heads up! </h6>
                                                <p>By submitting this form, you agree to receive marketing communications from The Stay Club about our services. You can unsubscribe at any time. To learn how we protect your data, please see our <a href="">Privacy Policy</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary rounded-pill">Request Availability</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}