import IconUI from "@/components/ui/IconUI";
import { useEffect, useState } from "react";

const FooterUI = () => {
  const [menuItems] = useState([
    { itemTitle: "Instagram", itemIcon: "instagram" },
    { itemTitle: "Github", itemIcon: "github" },
    { itemTitle: "Twitter", itemIcon: "twitter" },
  ]);

  const [westAfricaTime, setWestAfricaTime] = useState("");

  const getWestAfricaTime = () => {
    const westAfricaTimeZone = "Africa/Lagos"; // Use the appropriate time zone
    const date = new Date().toLocaleTimeString("en-US", {
      timeZone: westAfricaTimeZone,
    });
    setWestAfricaTime(date);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getWestAfricaTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <footer className="uni-cta-footer dark:uk-text-white">
      <div className="uk-container">
        <div className="uk-padding-small-horizontal">
          <div className="uk-margin-small-horizontal">
            <div className="uk-grid" data-uk-grid>
              <div className="uk-width-1-1 uk-width-auto@m uk-text-small">
                <div className="uk-panel">
                  <span className="uk-logo uk-text-large uk-navbar-item uk-margin-remove uk-padding-remove uk-text-normal icon-anim">
                    `M[O]`
                    <a className="uk-text-small uk-border-left uk-padding-small-left uk-underline-link">
                      hello<span>@</span>themayorwa.com
                    </a>
                    <IconUI name="arrow-top-right" width="14px" height="14px" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="uk-margin-small-horizontal">
            <div className="uk-grid" data-uk-grid>
              <div className="uk-flex uk-flex-middle uk-margin-small-top uk-margin-remove@s uk-navbar-center@s">
                {menuItems.map((item, index) => (
                  <div
                    className="uk-navbar-item uk-padding-small-vertical"
                    key={index}
                  >
                    <a className="uk-flex uk-flex-middle">
                      <IconUI name={item.itemIcon} />
                      <span className="uk-text-small uk-margin-xsmall-left uk-visible@l">
                        {item.itemTitle}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="uk-navbar-right uk-navbar-center@s">
                <a className="uk-text-small uk-text-normal">
                  {westAfricaTime} WAT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterUI;
