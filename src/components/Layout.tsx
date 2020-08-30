import React, { useState, FC, useEffect } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../sass/main.scss";
import Footer from "./Footer";
import SideBar from "./Sidebar";

const siteMetaDataQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

interface ILayout {
  fullMenu?: boolean;
}

const Layout: FC<ILayout> = (props) => {
  const { children, fullMenu } = props;

  const [isPreloaded, setIsPreloaded] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPreloaded(false);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <StaticQuery
      query={siteMetaDataQuery}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "Solid State" },
              { name: "keywords", content: "site, web" },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div
            className={isPreloaded ? " main-body  is-preload" : " main-body"}
          >
            <div id="page-wrapper">
              <SideBar fullMenu={fullMenu} />
              {children}
              <Footer />
            </div>
          </div>
        </>
      )}
    />
  );
};

export default Layout;
