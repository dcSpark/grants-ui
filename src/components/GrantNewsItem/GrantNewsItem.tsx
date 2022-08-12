import React from "react";

const GrantNewsItem = () => {
  return (
    <div className="gui-z-10 gui-flex gui-mb-20 animation-delay-300 card-anim ">
      <div className="gui-p-24 lg:gui-w-2/4">
        <span className="gui-text-grey">9 days ago</span>
        <h3 className="gui-mb-12 gui-text-24 gui-font-bold gui-font-heading">News Title 1</h3>
        <p className="gui-leading-relaxed gui-mb-12">
          The next vital piece of ecosystem tooling for Milkomeda C1 has
          arrived! The Milkomeda C1 Bridge Explorer allows you to easily track
          and follow your ADA and other assets as they move from Milkomeda to
          Cardano...
        </p>
        <a
          href="https://medium.com/@milkomedafoundation/milkomeda-c1-bridge-explorer-is-live-cfb8b5e8fd5d"
          target="_blank"
          rel="noopener"
          className="medium-link"
        >
          Read More
          <img
            className="gui-ml-5"
            src="/images/icons/icon-medium-link.svg"
            width="16"
            height="16"
            alt="check"
          />
        </a>
      </div>
      <div className="card-r gui-z-10 lg:gui-w-2/4 gui-p-24">
        <img
          className="gui-w-full gui-h-full gui-object-cover gui-rounded-lg"
          width="528"
          height="256"
          src="https://via.placeholder.com/528x256"
          alt="News Image"
        />
      </div>
    </div>
  );
};

export default GrantNewsItem;
