import classNames from "classnames";
import React from "react";
import LinkIcon from "../assets/LinkIcon";

export type NewsCardProps = {
  title: string;
  description: string;
  imgUrl: string;
  date: string;
  linkText: string;
  url: string;
  className?: string;
};
const NewsCard = ({
  title,
  description,
  imgUrl,
  date,
  url,
  linkText = "Read More",
  className,
}: NewsCardProps) => {
  return (
    <div
      className={classNames(
        "gui-flex gui-flex-col gui-space-y-6 md:gui-flex-row md:gui-space-x-6 gui-bg-newsCard-bg",
        className,
      )}
    >
      <div className="md:gui-basis-2/4 md:gui-max-w-[50%]">
        <span className="gui-block gui-text-newsCard-date gui-mb-2">
          {date}
        </span>
        <h3 className="gui-text-xl md:gui-text-3xl gui-line-clamp-3 gui-text-newsCard-title gui-mb-3 md:gui-mb-6 gui-font-bold">
          {title}
        </h3>
        <p className="gui-leading-relaxed md:gui-line-clamp-3 gui-mb-4 gui-text-newsCard-description">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="gui-flex gui-items-center gui-text-newsCard-link gui-text-sm gui-font-medium"
        >
          {linkText}
          <LinkIcon className="gui-ml-1 gui-text-newsCard-icon" />
        </a>
      </div>
      <img
        className="gui-block md:gui-basis-2/4 md:gui-max-w-[50%] gui-object-cover gui-rounded-3xl gui-aspect-video"
        src={imgUrl}
        alt=""
      />
    </div>
  );
};

export default NewsCard;
