import React from "react";
import image from "./shash.png";
import Mid from "./Mid";
import Bottom from "./Bottom";

export default function Top() {
  return (
    <div>
      <div className="box_left">
        <img src={image} width="317px" />
        <div className="top">
          <h2>Shashank Rao</h2>
          <h4>Fulstack Developer</h4>
          <h5>shashanknp.in</h5>
          <button className="but1">Email</button>
          <button className="but2">LinkedIn</button>
          <Mid />
        </div>
        <Bottom />
      </div>
      <div className="box_right">
        <img src={image} width="317px" />
        <div className="top">
          <h2>Shashank Rao</h2>
          <h4>Fulstack Developer</h4>
          <h5>shashanknp.in</h5>
          <button className="but1">Email</button>
          <button className="but2">LinkedIn</button>
          <Mid />
        </div>
        <Bottom />
      </div>
    </div>
  );
}

// COMPLETE
// import React from "react";
// import image from "./laura_img.png";
// import instagram from "./Instagram Icon.png";
// import linkedin from "./linkedin.png";
// import mail from "./Mail.png";
// import facebook from "./Facebook Icon.png";
// import github from "./GitHub Icon.png";
// import twitter from "./Twitter Icon.png";

// export default function Top() {
//   return (
//     <div>
//       <div className="box_left">
//         <img src={image} />
//         <div className="mid">
//           <h2>Laura Smith</h2>
//           <h4>Frontend Developer</h4>
//           <h5>laurasmith.in</h5>
//           <button className="but1">Email</button>
//           <button className="but2">LinkedIn</button>
//           <h3>About</h3>
//           <p>
//             I am a frontend developer with a particular interest in making
//             things simple and automating daily tasks. I try to keep up with
//             security and best practices, and am always looking for new things to
//             learn.
//           </p>
//           <h3>Interests</h3>
//           <p>
//             Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
//             Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
//           </p>
//         </div>
//         <div className="bottom">
//           <div className="icons">
//             <img src={twitter} />
//             <img src={facebook} />
//             <img src={instagram} />
//             <img src={github} />
//           </div>
//         </div>
//       </div>
//       <div className="box_right">
//         <img src={image} />
//         <div className="mid">
//           <h2>Laura Smith</h2>
//           <h4>Frontend Developer</h4>
//           <h5>laurasmith.in</h5>
//           <button className="but1">Email</button>
//           <button className="but2">LinkedIn</button>
//           <h3>About</h3>
//           <p>
//             I am a frontend developer with a particular interest in making
//             things simple and automating daily tasks. I try to keep up with
//             security and best practices, and am always looking for new things to
//             learn.
//           </p>
//           <h3>Interests</h3>
//           <p>
//             Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
//             Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
//           </p>
//         </div>
//         <div className="bottom">
//           <div className="icons">
//             <img src={twitter} />
//             <img src={facebook} />
//             <img src={instagram} />
//             <img src={github} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
