import React from "react";
import HeaderUI from "@/components/ui/HeaderUI";
import FooterUI from "@/components/ui/FooterUI";

const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <>
      <div className="wrap dark:uk-background-gray-200">
        <div className="uni-hero uk-panel uk-overflow-hidden">
          <HeaderUI />
          {children}
        </div>
        <FooterUI />
      </div>
    </>
  );
};

export default DefaultLayout;
