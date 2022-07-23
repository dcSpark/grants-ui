import React from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Maybe } from "../../graphql-types";

const GrantProposalTab = ({
  description,
  statusTitle,
  statusDescription,
  statusLink,
  startDate,
  endDate,
}: {
  description: Maybe<string> | undefined;
  statusTitle: Maybe<string> | undefined;
  statusDescription: Maybe<string> | undefined;
  statusLink: Maybe<string> | undefined;
  startDate?: string;
  endDate?: string;
}) => {
  const categories = [
    { label: "Description", isDisplay: true },
    {
      label: "Status",
      isDisplay: statusTitle || statusDescription || statusLink,
    },
  ];

  return (
    <>
      <div className="gui-flex gui-flex-col md:gui-flex-row gui-text-primaryText">
        <Tab.Group as="div" className="gui-flex-1">
          <Tab.List className="gui-flex gui-space-x-1 gui-border-b-[1px] gui-border-b-borderTabs">
            {categories.map(({ label, isDisplay }) =>
              isDisplay ? (
                <Tab
                  key={label}
                  className={({ selected }) =>
                    classNames(
                      "gui-text-xs gui-py-1 gui-px-5 gui-border-b-2 hover:gui-text-accentColor hover:gui-border-accentColor uppercase tracking-widest",
                      "focus:gui-outline-none focus-visible:gui-ring focus-visible:gui-ring-accentColor focus-visible:gui-ring-opacity-75",
                      selected
                        ? "gui-text-accentColor"
                        : "gui-text-borderTab hover:gui-text-accentColor",
                    )
                  }
                >
                  {label}
                </Tab>
              ) : null,
            )}
          </Tab.List>
          <Tab.Panels className="gui-mt-2">
            <Tab.Panel
              className={classNames(
                "gui-p-1",
                "focus:gui-outline-none focus-visible:gui-ring focus-visible:gui-ring-accentColor focus-visible:gui-ring-opacity-75",
              )}
            >
              <dl className="gui-space-y-4">
                <div>
                  <dt className="gui-text-sm gui-text-secondaryText gui-leading-5">
                    Problem statement / Description
                  </dt>
                  <dd className="gui-text-sm">{description}</dd>
                </div>
              </dl>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "gui-p-1 gui-text-primaryText",
                "gui-ring-accentColor gui-ring-opacity-60 gui-ring-offset-1 gui-ring-offset-accentColor focus:gui-outline-none focus:gui-ring-1",
              )}
            >
              <dl className="gui-space-y-4">
                {statusTitle ? (
                  <div>
                    <dt className="gui-text-sm gui-text-secondaryText gui-leading-5">
                      Status
                    </dt>
                    <dd className="gui-text-sm">{statusTitle}</dd>
                  </div>
                ) : null}
                {statusDescription ? (
                  <div>
                    <dt className="gui-sr-only">Description</dt>
                    <dd className="gui-text-sm">{statusDescription}</dd>
                  </div>
                ) : null}
                {statusLink ? (
                  <div>
                    <dt className="gui-text-sm gui-text-secondaryText gui-leading-5">
                      Read more:
                    </dt>
                    <dd className="gui-text-sm gui-text-accentColor">
                      <a
                        href={statusLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gui-ring-blue-400 focus:gui-outline-none focus:gui-ring-2"
                      >
                        {statusLink}
                      </a>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <dl className="gui-flex gui-flex-row gui-gap-8 gui-text-sm gui-mt-[26px] gui-px-1 md:gui-px-0 md:gui-pt-4 md:gui-border-t-[1px] md:gui-border-t-borderTabs md:gui-gap-0 md:gui-flex-col md:gui-pl-7 md:gui-basis-[260px] md:gui-min-w-[260px]">
          {startDate ? (
            <div>
              <dt className="gui-text-secondaryText">Start Date</dt>
              <dd>{startDate}</dd>
            </div>
          ) : null}
          {endDate ? (
            <div>
              <dt className="gui-text-secondaryText">End Date</dt>
              <dd>{endDate}</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </>
  );
};

export default GrantProposalTab;
