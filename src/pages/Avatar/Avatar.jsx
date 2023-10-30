import "../Avatar/Avatar.css";

const Avatar = () => {
  return (
    <>
      <div className="component-details">
        <div className="component-description">
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
        </div>
        <div className="component-examples">
          <h3 className="heading h3">Rounded Avatars</h3>
          <div className="component-demo">
            <div className="avatar">
              <img
                className="avatar-img"
                src="../../assets/avatar.jpg"
                alt="rounded avatar"
              />
            </div>
            <div className="avatar avatar-xs">
              <img
                loading="lazy"
                className="avatar-img"
                src="../../assets/avatar.jpg"
                alt="rounded avatar"
              />
            </div>
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

          <h3 class="heading h3">Square Avatars</h3>
          <div class="component-demo">
            <div class="avatar avatar-square">
              <img
                loading="lazy"
                class="avatar-img"
                src="../../assets/avatar.jpg"
                alt="square avatar"
              />
            </div>
          </div>

          {/* <h3 class="heading h3">Avatars with icon</h3>
          <div class="component-demo">
            <div class="avatar avatar-icon">
              <i class="material-icons">photo_camera</i>
            </div>
          </div> */}

          <h3 className="heading h3">Avatars group</h3>
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
          </div>

          <h3 className="heading h3">Avatars stack</h3>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
