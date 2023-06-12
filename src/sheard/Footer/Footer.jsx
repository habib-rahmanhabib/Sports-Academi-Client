


const Footer = () => {
    return (
        <>

     

<footer className="footer p-10 bg-black text-white">
  <div>
   
  </div> 
  <div className="text-white">
   
    
    <a className="link link-hover"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhIjy7rtEyZpJjiMTWYsiercTK50VVaki850XAk8OLw&s" alt="" /></a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Sports Academi Industries Ltd</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;