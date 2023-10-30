import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./BadgeDoc.css";
import { AvatarBadge, IconBadge } from "../../pages/Badge/Badge";

const BadgeDoc = () => {
  return (
    <div className="badge-main">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="badge-container">
        <h1>Badge</h1>
        <p>
          <span>Badges</span> on avatars can be integrated to convey a user's
          status effectively, such as indicating when they are{" "}
          <span>online</span>, <span>offline</span>, or <span>away</span>.
          Furthermore, these badges can be applied to icons to signify pending
          notifications or updates.
        </p>
        <h2>Badge on Icons</h2>
        <p>
          For <span>Icon Badges</span>, the two props are to be added in span
          tag <span>children</span>, <span>number</span>.
        </p>
        <div>
          <h3>Props Description</h3>
          <p>
            <strong>children: </strong>It will contain the icon, for which you
            want to show the notification badge.
          </p>
          <p>
            <strong>number: </strong>It is the number of notifications or no of
            operations.
          </p>
        </div>
        <div className="badge-showcase">
          <IconBadge number="4">
            <i className="fa-solid fa-cart-shopping"></i>
          </IconBadge>
          <IconBadge number="7+">
            <i className="fa-solid fa-envelope"></i>
          </IconBadge>
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CIconBadge%2520number%253D%25224%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fa-solid%2520fa-cart-shopping%2522%253E%253C%252Fi%253E%250A%253C%252FIconBadge%253E%250A%253CIconBadge%2520number%253D%25227%252B%2522%253E%250A%2520%2520%253Ci%2520className%253D%2522fa-solid%2520fa-envelope%2522%253E%253C%252Fi%253E%250A%253C%252FIconBadge%253E"
            style={{
              width: "867px",
              height: "200px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden"
            }}
            title="icon-badge"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        <h2>Badge on Avatars</h2>
        <p>
          The Badge component is used to highlight and display short
          information, labels, or statuses.
        </p>
        <div style={{ display: "flex", margin: "20px" }}>
          <button style={{ backgroundColor: "blue", margin: "8px" }}>
            Primary
          </button>
          <button style={{ backgroundColor: "grey", margin: "8px" }}>
            Secondary
          </button>
          <button style={{ backgroundColor: "green", margin: "8px" }}>
            Success
          </button>
          <button style={{ backgroundColor: "red", margin: "8px" }}>
            Danger
          </button>
          <button
            style={{ backgroundColor: "yellow", margin: "8px", color: "black" }}
          >
            Warning
          </button>
        </div>
        <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CBadge%2520color%253D%2522primary%2522%253EPrimary%253C%252FBadge%253E%250A%253CBadge%2520color%253D%2522secondary%2522%253ESecondary%2520%252F%253E%253C%252FBadge%253E%250A%253CBadge%2520color%253D%2522success%2522%253ESuccess%253C%252FBadge%253E%250A%253CBadge%2520color%253D%2522danger%2522%253EDanger%2520%252F%253E%253C%252FBadge%253E%250A%253CBadge%2520color%253D%2522warning%2522%253EWarning%2520%252F%253E%253C%252FBadge%253E%250A%253CBadge%2520color%253D%2522info%2522%253EInfo%2520%252F%253E%253C%252FBadge%253E%250A%253CBadge%2520color%253D%2522light%2522%253ELight%2520%252F%253E%253C%252FBadge%253E%250A%253CBadge%2520color%253D%2522dark%2522%253EDark%2520%252F%253E%253C%252FBadge%253E"
            style={{
              width: "529px",
              height: "335px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden"
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code>
        {/* <div>
          <h3>Props Description</h3>
          <p>
            <strong>size: </strong>This props defines the size of the avatar and
            status badge.
          </p>
          <p>
            <strong>status: </strong>It defines the status of the user, whether
            he/she online, offline or away.
          </p>
        </div> */}
        {/* <div className="badge-showcase">
          <AvatarBadge
            size="lg"
            srcImg="https://res.cloudinary.com/dqlasoiaw/image/upload/v1688583892/socialMedia/w0nlveqpfx9yimblumq3.jpg"
            altText="John"
            status="offline"
          />
          <AvatarBadge
            size="md"
            srcImg="https://res.cloudinary.com/dqlasoiaw/image/upload/v1687869079/tech-social/pexels-photo-220453_xrctn8.jpg"
            altText="John"
            status="online"
          />
          <AvatarBadge
            size="sm"
            name="Sudipta"
            bgColor="purple"
            status="away"
          />
          <AvatarBadge size="xs" status="online" />
        </div> */}
        {/* <code>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=night-owl&wt=none&l=htmlmixed&width=867&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=6px&ph=6px&ln=false&fl=1&fm=Source+Code+Pro&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CAvatarBadge%250A%2520%2520size%253D%2522lg%2522%250A%2520%2520srcImg%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdqlasoiaw%252Fimage%252Fupload%252Fv1688583892%252FsocialMedia%252Fw0nlveqpfx9yimblumq3.jpg%2522%250A%2520%2520altText%253D%2522John%2522%250A%2520%2520status%253D%2522offline%2522%250A%252F%253E%250A%253CAvatarBadge%250A%2520%2520size%253D%2522md%2522%250A%2520%2520srcImg%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdqlasoiaw%252Fimage%252Fupload%252Fv1687869079%252Ftech-social%252Fpexels-photo-220453_xrctn8.jpg%2522%250A%2520%2520altText%253D%2522John%2522%250A%2520%2520status%253D%2522online%2522%250A%252F%253E%250A%253CAvatarBadge%250A%2520%2520size%253D%2522sm%2522%250A%2520%2520name%253D%2522Sudipta%2522%250A%2520%2520bgColor%253D%2522purple%2522%250A%2520%2520status%253D%2522away%2522%250A%252F%253E%250A%253CAvatarBadge%2520size%253D%2522xs%2522%2520status%253D%2522online%2522%2520%252F%253E"
            style={{
              width: "867px",
              height: "490px",
              border: 0,
              transform: "scale(1)",
              overflow: "hidden"
            }}
            title="avatar-badge"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </code> */}
      </div>
    </div>
  );
};

export default BadgeDoc;
