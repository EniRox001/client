import image from '../assets/images/phone-img-one.png';
import fb_icon from '../assets/svgs/fb-icon.png';

const LoginBox = () => {
    return (
        <div className="login">
            <div className='login-container'>
                <div className="login-container-img">
                    <img className="login-container-image" src={image} />
                </div>
                <div className="login-container-box">
                    <div className="login-container-box-title">
                        Instagram
                    </div>
                    <div className="login-container-box-subtitle">
                        Sign up to see photos and videos from your friends.
                    </div>
                    <button className="login-container-box-fb-login-button">
                        <img className="login-container-box-fb-login-button-image" src={fb_icon} style={{ 'color': 'red' }} />
                        <div className="login-container-box-fb-login-button-text">Login in with Facebook</div>
                    </button>
                    <div class="divider">
                        <hr class="left" />OR<hr class="right" />
                    </div>
                    <input className="login-container-box-input-field" placeholder="Mobile number or email" />
                    <input className="login-container-box-input-field" placeholder="Full Name" />
                    <input className="login-container-box-input-field" placeholder="Username" />
                    <input className="login-container-box-input-field" placeholder="Password" />

                    <div className="login-container-box-terms">
                        People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a>
                    </div>
                    <div className="login-container-box-terms">
                        By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>
                    </div>
                    <button className="login-container-box-signup">
                        <div className="login-container-box-fb-login-button-text">Sign up</div>
                    </button>
                    <div className="login-container-box-login-card"></div>
                </div>
                <div className="login-container-outer">
                    <div className="login-container-outer-text">
                        Have an account ?
                    </div>
                    <div className="login-container-outer-links"></div>
                </div>
            </div>
            <div className="login-outer-links"></div>
            <div className="login-outer-links-about"></div>
        </div>
    )
}

export default LoginBox;