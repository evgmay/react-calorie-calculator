import React from "react"
import { IoLogoVk, IoLogoInstagram, IoLogoReact, IoLogoNodejs } from "react-icons/io5"

export default function Footer() {
    return (
        <div className="font-small blue pt-4 bg-dark text-white">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Follow us on Social Media</h5>
                        <p>MADI © 2021<br />Cathedra: ASC<br />2bASC1</p>
                        <a href="https://en.reactjs.org/" className="text-decoration-none m-3 text-info"
                            target="_blank" rel="noreferrer"><IoLogoReact size="40" /> React</a>
                        <a href="https://nodejs.org/en/" className="text-decoration-none m-3 text-success"
                            target="_blank" rel="noreferrer"><IoLogoNodejs size="40" /> Node.js</a>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">VK</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://vk.com/zxcursed812" className="text-decoration-none" target="_blank"
                                rel="noreferrer">Evgeny Dakinov <IoLogoVk /></a></li>
                            <li><a href="https://vk.com/id506370702" className="text-decoration-none" target="_blank"
                                rel="noreferrer">Nikita Nikitin <IoLogoVk /></a></li>
                            <li><a href="https://vk.com/osergeyk" className="text-decoration-none" target="_blank"
                                rel="noreferrer">Sergey Kukharev <IoLogoVk /></a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Instagram</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.instagram.com/evgddd/?hl=ru" className="text-decoration-none"
                                target="_blank" rel="noreferrer">Evgeny Dakinov <IoLogoInstagram /></a></li>
                            <li><a href="https://www.instagram.com/nikita_pan_0/?hl=ru" className="text-decoration-none"
                                target="_blank" rel="noreferrer">Nikita Nikitin <IoLogoInstagram /></a></li>
                            <li><a href="https://www.instagram.com/osergeyk/?hl=ru" className="text-decoration-none"
                                target="_blank" rel="noreferrer">Sergey Kukharev <IoLogoInstagram /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-3">© 2020 Copyright. All rights reserved.</div>
        </div>
    );
}