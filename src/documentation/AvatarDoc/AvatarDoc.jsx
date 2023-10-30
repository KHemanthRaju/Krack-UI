import Sidebar from "../../components/Sidebar/Sidebar";
import "./AvatarDoc.css";

const AvatarDoc = () => {
  return (
    <>
      <div className="avatar-main">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="avatar-container">
          <h2 className="heading h2" id="avatars">
            Avatars
          </h2>
          <p className="heading h4">
            Provide a visual representation of a user or entity
          </p>
          <p className="txt">
            An avatar can be circular or square and small, medium or large,
            depending on the usage. The default type is a rounded avatar and
            requires
            <span className="txt txt-primary">avatar</span> as the base class.
            Avatars can also be grouped or stacked to represent a group of
            people. It can be done by wrapping all avatars inside
            <span className="txt txt-primary">avatar-group</span> and
            <span className="txt txt-primary">avatar-stack</span> classes.
          </p>
          <div className="component-examples">
            <h3 className="heading h3">Rounded Avatars</h3>
            <div className="component-demo">
              <div className="avatar avatar-sm">
                <img
                  loading="lazy"
                  class="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="rounded avatar"
                />
              </div>
              <div class="avatar avatar-md">
                <img
                  loading="lazy"
                  class="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="rounded avatar"
                />
              </div>
              <div class="avatar avatar-lg">
                <img
                  loading="lazy"
                  class="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="rounded avatar"
                />
              </div>
              <div class="avatar avatar-xl">
                <img
                  loading="lazy"
                  class="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="rounded avatar"
                />
              </div>
            </div>
            <code>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CAvatar%2520src%253D%2522https%253A%252F%252Fexample1.png%2522%2520name%253D%2522Pic1%2522%2520size%253D%2522lg%2522%2520%252F%253E%250A%253CAvatar%2520src%253D%2522https%253A%252F%252Fexample1.png%2522%2520name%253D%2522Pic2%2522%2520size%253D%2522md%2522%2520%252F%253E%250A%253CAvatar%2520src%253D%2522https%253A%252F%252Fexample1.png%2522%2520name%253D%2522Pic3%2522%2520size%253D%2522sm%2522%2520%252F%253E%250A%253CAvatar%2520src%253D%2522https%253A%252F%252Fexample1.png%2522%2520name%253D%2522Pic4%2522%2520size%253D%2522xs%2522%2520%252F%253E"
                style={{
                  width: "100%",
                  height: "200px",
                  border: 0,
                  transform: "scale(1)",
                  overflow: "hidden"
                }}
                title="Avatar"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </code>
          </div>
          {/* <h3 class="heading h3">Square Avatars</h3>
          <div class="component-demo">
            <div class="avatar avatar-square">
              <img
                loading="lazy"
                class="avatar-img"
                src="../../assets/avatar.jpg"
                alt="square avatar"
              />
            </div>
          </div> */}

          {/* <h3 class="heading h3">Avatars with icon</h3>
          <div class="component-demo">
            <div class="avatar avatar-icon">
              <i class="material-icons">photo_camera</i>
            </div>
          </div> */}

          {/* <h3 className="heading h3">Avatars group</h3>
          <div className="component-demo">
            <div className="avatar-group">
              <div className="avatar">
                <img
                  loading="lazy"
                  className="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="avatar group"
                />
              </div>
              <div className="avatar">
                <img
                  loading="lazy"
                  className="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="avatar group"
                />
              </div>
              <div className="avatar">
                <img
                  loading="lazy"
                  className="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="avatar group"
                />
              </div>
            </div>
          </div> */}

          {/* <h3 className="heading h3">Avatars stack</h3>
          <div className="component-demo">
            <div className="avatar-stack">
              <div className="avatar">
                <img
                  loading="lazy"
                  className="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="avatar stack"
                />
              </div>
              <div className="avatar">
                <img
                  loading="lazy"
                  className="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="avatar stack"
                />
              </div>
              <div className="avatar">
                <img
                  loading="lazy"
                  className="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="avatar stack"
                />
              </div>
              <div className="avatar">
                <img
                  loading="lazy"
                  className="avatar-img"
                  src="../../assets/avatar.jpg"
                  alt="avatar stack"
                />
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default AvatarDoc;
