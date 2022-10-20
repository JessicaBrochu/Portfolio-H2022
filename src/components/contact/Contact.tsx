import React, { memo, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { Path } from '../../utils/utils';
import { useScroll } from '../../utils/ScrollHook';
// FIXME declare this module type
//@ts-ignore
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null)
  useScroll(ref, Path.CONTACT)

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm("service_u62affi", "template_4gshdma", e.currentTarget, "GBG2OZlOdP08Ivar3")
      e.currentTarget.reset()
  }

  return (

    <div className="contact" id='contact' ref={ref}>
      <div className="wrapper">
        <Fade left>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className='contact-input'>
              <label>Nom</label>
              <input aria-label='Nom' type="text" name="Nom" />
            </div>
            <div className='contact-input'>
              <label>Courriel</label>
              <input aria-label='Courriel' type="email" name="Courriel" />
            </div>
            <div className='contact-input'>
              <label>Message</label>
              <textarea aria-label='Message' className='message-box' name="message" />
            </div>
            <input className='contact-button' type="submit" value="Envoyer" />
          </form>
        </Fade>
        <Fade right>
          <div className="contact-content">
            <h3>CONTACTEZ-MOI</h3>
            <p>Vous voulez en savoir davantage sur moi? Je vous invite à <a href="assets/jessica-brochu.pdf" download="jessica-brochu.pdf">consulter mon CV</a> ainsi qu'à <a href="https://www.youtube.com/watch?v=XNC0GDeVjAo&ab_channel=JessicaBrochu" target="_blank">regarder ma vidéo</a> pour de plus amples informations.</p>
            <div className='contact-mail-phone'>
              <a href="mailto: jessicabrochu.pro@gmail.com">jessicabrochu.pro@gmail.com</a>
              <a className='contact-phone' href="tel:5149184945">514-918-4945</a>
            </div>
            <div className='contact-social'>
              <a className='icons' href="https://github.com/JessicaBrochu" target="_blank" aria-label="github">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C7.6255 9.84653e-05 5.32849 0.845114 3.51999 2.38385C1.71149 3.92258 0.509528 6.05462 0.12916 8.39848C-0.251207 10.7423 0.214845 13.1451 1.44393 15.1768C2.67301 17.2084 4.58491 18.7365 6.83755 19.4875C7.33755 19.575 7.52505 19.275 7.52505 19.0125C7.52505 18.775 7.51254 17.9875 7.51254 17.15C5.00003 17.6125 4.35003 16.5375 4.15003 15.975C3.9281 15.428 3.5763 14.9431 3.12503 14.5625C2.77503 14.375 2.27503 13.9125 3.11252 13.9C3.4323 13.9347 3.73901 14.046 4.00666 14.2244C4.2743 14.4028 4.49499 14.6432 4.65003 14.925C4.7868 15.1707 4.97071 15.387 5.19122 15.5615C5.41173 15.736 5.6645 15.8653 5.93506 15.9419C6.20562 16.0185 6.48864 16.041 6.76791 16.0081C7.04717 15.9752 7.3172 15.8875 7.56251 15.75C7.6058 15.2416 7.83237 14.7663 8.20003 14.4125C5.97503 14.1625 3.65003 13.3 3.65003 9.47503C3.63597 8.48118 4.00271 7.51961 4.67503 6.78753C4.36931 5.92375 4.40508 4.97581 4.77503 4.13753C4.77503 4.13753 5.6125 3.87502 7.52503 5.16253C9.16131 4.7125 10.8887 4.7125 12.525 5.16253C14.4375 3.86253 15.275 4.13753 15.275 4.13753C15.645 4.9758 15.6808 5.92376 15.375 6.78753C16.0494 7.51835 16.4164 8.48076 16.4 9.47503C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.0762 14.6544 12.26 14.9448 12.3764 15.264C12.4929 15.5833 12.5393 15.9238 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.4362 18.7304 17.3426 17.1988 18.5664 15.166C19.7903 13.1333 20.2519 10.7318 19.8689 8.39024C19.4859 6.04865 18.2832 3.91937 16.4755 2.38251C14.6678 0.84565 12.3727 0.00123491 10 0Z" fill="black" />
                </svg>
              </a>
              <a className='icons' href="https://www.linkedin.com/in/jessicabrochu/" target="_blank" aria-label="linkedin">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.41 0.000139831H1.47C1.27958 -0.00250479 1.0905 0.0323873 0.913566 0.102824C0.73663 0.17326 0.575303 0.27786 0.438797 0.410652C0.302292 0.543443 0.193281 0.701824 0.117992 0.876749C0.0427024 1.05167 0.00260839 1.23972 0 1.43014V18.5701C0.00260839 18.7606 0.0427024 18.9486 0.117992 19.1235C0.193281 19.2985 0.302292 19.4568 0.438797 19.5896C0.575303 19.7224 0.73663 19.827 0.913566 19.8975C1.0905 19.9679 1.27958 20.0028 1.47 20.0001H18.41C18.6004 20.0028 18.7895 19.9679 18.9664 19.8975C19.1434 19.827 19.3047 19.7224 19.4412 19.5896C19.5777 19.4568 19.6867 19.2985 19.762 19.1235C19.8373 18.9486 19.8774 18.7606 19.88 18.5701V1.43014C19.8774 1.23972 19.8373 1.05167 19.762 0.876749C19.6867 0.701824 19.5777 0.543443 19.4412 0.410652C19.3047 0.27786 19.1434 0.17326 18.9664 0.102824C18.7895 0.0323873 18.6004 -0.00250479 18.41 0.000139831ZM6.03 16.7401H3.03V7.74014H6.03V16.7401ZM4.53 6.48014C4.11626 6.48014 3.71947 6.31578 3.42691 6.02323C3.13436 5.73067 2.97 5.33388 2.97 4.92014C2.97 4.5064 3.13436 4.10961 3.42691 3.81705C3.71947 3.5245 4.11626 3.36014 4.53 3.36014C4.7497 3.33522 4.97218 3.35699 5.18288 3.42402C5.39357 3.49105 5.58774 3.60183 5.75266 3.7491C5.91757 3.89637 6.04953 4.07682 6.13987 4.27862C6.23022 4.48043 6.27692 4.69904 6.27692 4.92014C6.27692 5.14124 6.23022 5.35985 6.13987 5.56166C6.04953 5.76346 5.91757 5.94391 5.75266 6.09118C5.58774 6.23845 5.39357 6.34923 5.18288 6.41626C4.97218 6.48329 4.7497 6.50505 4.53 6.48014ZM16.85 16.7401H13.85V11.9101C13.85 10.7001 13.42 9.91014 12.33 9.91014C11.9927 9.91261 11.6642 10.0184 11.3888 10.2133C11.1135 10.4082 10.9045 10.6828 10.79 11.0001C10.7117 11.2352 10.6778 11.4827 10.69 11.7301V16.7301H7.69C7.69 16.7301 7.69 8.55014 7.69 7.73014H10.69V9.00014C10.9625 8.52725 11.3589 8.13766 11.8364 7.87334C12.314 7.60902 12.8546 7.47999 13.4 7.50014C15.4 7.50014 16.85 8.79014 16.85 11.5601V16.7401Z" fill="black" />
                </svg>
              </a>
              <a className='icons' href="https://www.behance.net/jessicabrochu" target="_blank" aria-label="behance">
                <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.3747 0.862004H17.5357V2.75943H24.4016L24.3747 0.862004ZM22.9313 13.9152C22.4125 14.2582 21.7998 14.4322 21.1778 14.4131C20.766 14.456 20.3498 14.4135 19.9552 14.2885C19.5606 14.1635 19.1962 13.9585 18.8846 13.6865C18.3087 13.035 18.0088 12.1858 18.0483 11.3181H26.978C27.0424 10.4145 26.965 9.50643 26.7487 8.62666C26.5395 7.78967 26.1733 6.99975 25.6696 6.29861C25.1626 5.6185 24.5077 5.0618 23.7542 4.67032C22.9158 4.25792 21.991 4.05035 21.0564 4.06476C20.1773 4.05833 19.3059 4.22763 18.4935 4.56266C17.7495 4.87553 17.0755 5.33298 16.5106 5.90836C15.9473 6.49524 15.511 7.1915 15.2291 7.95381C14.9265 8.77678 14.7757 9.64756 14.784 10.5241C14.7701 11.4131 14.9163 12.2973 15.2156 13.1347C15.4699 13.8931 15.8734 14.5931 16.4027 15.1937C16.9502 15.7833 17.6231 16.2431 18.372 16.5393C19.2072 16.8568 20.0954 17.0121 20.9889 16.9969C22.2426 17.0359 23.4804 16.7085 24.55 16.0549C25.6304 15.289 26.4082 14.1703 26.7487 12.8925H23.7677C23.6081 13.3152 23.3144 13.6744 22.9313 13.9152ZM18.3046 8.37098C18.4096 8.03547 18.5839 7.72563 18.8162 7.4614C19.0485 7.19718 19.3337 6.98444 19.6535 6.83689C20.077 6.64672 20.5382 6.55471 21.0024 6.56775C21.3378 6.53917 21.6754 6.58331 21.992 6.69713C22.3087 6.81094 22.5969 6.99175 22.8369 7.22714C23.2953 7.78686 23.5894 8.4622 23.6867 9.1784H18.0888C18.1106 8.90493 18.1603 8.63439 18.2372 8.37098H18.3046ZM11.1689 7.72505C11.8554 7.43984 12.452 6.9749 12.8955 6.37935C13.3032 5.74688 13.5057 5.0045 13.4755 4.25315C13.502 3.56798 13.368 2.88608 13.0844 2.26153C12.846 1.72045 12.4634 1.25498 11.9783 0.915832C11.4639 0.563223 10.8797 0.324618 10.2651 0.21607C9.53784 0.0638903 8.79602 -0.0083109 8.05295 0.000759451H0V16.9296H8.2283C8.97922 16.9301 9.72715 16.8352 10.454 16.647C11.1429 16.4692 11.7956 16.1732 12.3829 15.7723C12.9518 15.379 13.415 14.8521 13.7318 14.2382C14.0824 13.5516 14.2541 12.788 14.2309 12.0178C14.2565 11.0634 13.9881 10.124 13.462 9.32642C12.8963 8.52429 12.0572 7.95505 11.1015 7.72505H11.1689ZM3.73646 2.894H7.23012C7.55108 2.89361 7.87149 2.92062 8.18784 2.97474C8.47913 3.01781 8.75888 3.11846 9.01067 3.2708C9.25394 3.40808 9.45106 3.61409 9.57721 3.8629C9.73344 4.16127 9.80789 4.49551 9.79303 4.8318C9.81816 5.12145 9.77377 5.4129 9.66352 5.68202C9.55327 5.95114 9.38033 6.19018 9.15905 6.37935C8.6763 6.71043 8.09865 6.87576 7.51339 6.85035H3.73646V2.894ZM10.2651 12.906C10.1266 13.1802 9.91699 13.4125 9.65814 13.5788C9.38877 13.746 9.09196 13.8644 8.78135 13.9287C8.43611 14.0058 8.08295 14.0419 7.72921 14.0364H3.6825V9.39371H7.72921C8.42365 9.36337 9.10943 9.55682 9.68512 9.94544C9.9452 10.1783 10.1467 10.469 10.2732 10.7939C10.3998 11.1189 10.4478 11.469 10.4135 11.816C10.45 12.1859 10.3992 12.5592 10.2651 12.906Z" fill="black" />
                </svg>
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default memo(Contact)