import IconUI from "@/components/ui/IconUI";
import { Link } from "react-router-dom";
import { useState } from "react";
const HeaderUI = () => {
  const [menuItems] = useState([
    { itemTitle: "career timeline", itemIcon: "roadmap", itemLink: "roadmap" },
    { itemTitle: "works", itemIcon: "showcase", itemLink: "works" },
    {
      itemTitle: "let's collaborate",
      itemIcon: "collab",
      itemLink: "collaborate",
    },
  ]);

  return (
    <header className="uk-container uni-studio-header uni-header">
      <div
        className="uni-header-navbar uk-sticky-transparent"
        data-uk-sticky="top: 120; animation: uk-animation-slide-top;"
      >
        <div className="uk-container uk-container-expand">
          <nav
            className="uk-navbar uk-navbar-container uk-navbar-transparent"
            data-uk-navbar
          >
            <div className="uk-navbar-top uk-flex-center">
              <div className="uk-navbar-left uk-flex-1">
                <div className="uk-panel">
                  <a
                    className="uk-logo uk-text-xlarge uk-navbar-item uk-margin-remove uk-text-normal"
                    href="#"
                  >
                    `M[O]`
                  </a>
                </div>
              </div>
              <div className="uk-navbar-right uk-flex">
                {menuItems.map((item, index) => (
                  <div
                    className={`uk-navbar-item uk-padding-large-vertical uk-padding-small-vertical@l ${index === menuItems.length - 1 ? "uk-padding-remove-right" : ""} ${index !== menuItems.length - 1 ? "uk-border-right uk-border-gray-70" : ""}`}
                    key={index}
                  >
                    <Link
                      to={`/${item.itemLink}`}
                      className="uk-flex uk-flex-middle"
                    >
                      <IconUI name={item.itemIcon} />
                      <span className="uk-text-small uk-margin-xsmall-left uk-text-normal uk-visible@l">
                        {item.itemTitle}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderUI;
