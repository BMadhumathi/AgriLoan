
import '../assets/css/Footer.css'

export default function Footer() {
  return (
    <div>
    <footer className="footer-distributed">

<div className="footer-left">

    <h3><span>Agro FundX</span></h3>

    <p className="footer-links">
        <a href="/" className="link-1">Home</a>
        
        <a href="/contact">Contact</a>
    </p>

    <p className="footer-company-name">Agro FundX ©️ 2023</p>
</div>

<div className="footer-center">

    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>444 Agro FundX</span> kuniyamuthur , coimbatore</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+91 9677904185</p>
    </div>

    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="/">agrofundx@gmail.com</a></p>
    </div>

</div>

<div className="footer-right">

    <p className="footer-company-about">
        <span>About  Agro FundX site</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

</div>

</footer>
</div>
)
}