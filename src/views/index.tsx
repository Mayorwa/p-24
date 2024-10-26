import DefaultLayout from "@/components/layouts/Default";
import IconUI from "@/components/ui/IconUI";
import { useEffect, useState } from "react";

const Index = () => {
  const iconAnimations = [
    "location-star",
    "globe",
    "location-c",
    "crossroad",
    "location",
    "heatmap",
    "location-download",
    "heatmap2",
    "location-building",
    "map",
  ];

  const [currentIcon, setCurrentIcon] = useState(iconAnimations[0]);
  let currentIconIndex = 0;

  const switchValue = () => {
    currentIconIndex = (currentIconIndex + 1) % iconAnimations.length;

    setCurrentIcon(iconAnimations[currentIconIndex]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      switchValue();
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <DefaultLayout>
      <div className="uk-container">
        <div className="uk-panel inner-section">
          <div className="uk-grid">
            <div className="uk-width-1-1">
              <div className="uk-margin-3xlarge-horizontal dark:uk-text-white dark:uk-border-white uk-position-relative uk-overflow-hide">
                <div>
                  <p className="uk-heading-hero@m uk-h1 uk-text-light uk-margin-remove">
                    Mayowa Ogunwole
                  </p>
                  <div className="uk-heading-hero@m uk-h2 uk-font-serif uk-text-normal uk-text-gray-80 dark:uk-text-gray-40 uk-margin-small-top">
                    {/*<a className="uk-link-underline"><span className="uk-text-success-60">La</span>g<span className="uk-text-success-60 uk-margin-remove">os</span></a>—<span className="uk-text-italic">based</span>*/}
                    <span>
                      Dundee, Scotland {/*Lagos, Nigeria{" "}*/}
                      <span className="dark:uk-text-white uk-text-black">
                        [
                        <IconUI name={currentIcon} width="50px" height="50px" />
                        ]
                      </span>
                    </span>{" "}
                    — <span className="uk-text-italic">based</span>
                    <span className="uk-margin-xsmall-vertical">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
                    {/*<span className="uk-margin-xsmall-vertical">🇳🇬</span>*/}
                    <p className="uk-margin-remove">Software Engineer.</p>
                  </div>
                  <p className="uk-text-2xlarge">
                    Frontend Engineer at{" "}
                    <span className="uk-text-semibold">HostelWorld</span>
                  </p>

                  <div className="uk-flex uk-margin-3xlarge-top">
                    <div className="uk-border-top uk-width-1-5"></div>
                    <div className="uk-width-4-5 uk-margin-left">
                      I care a lot about using design for positive impact. and
                      enjoy creating user-centric, delightful, and human
                      experiences.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container">
        <div className="uk-panel inner-section">
          <p className="uk-h1@m uk-h2 uk-font-serif uk-text-light">Works</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Index;
