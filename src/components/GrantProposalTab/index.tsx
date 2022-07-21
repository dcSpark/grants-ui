import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Maybe } from "../../graphql-types";

const categories = ["Description", "Status"];
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
  const isStatusDisplay = statusTitle || statusDescription || statusLink;
  return (
    <>
      <div className="flex flex-col md:flex-row text-primaryText">
        <Tab.Group as="div" className="flex-1">
          <Tab.List className="flex space-x-1 border-b-[1px] border-b-borderTabs">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "text-xs py-1 px-5 border-b-2 hover:text-orange hover:border-orange uppercase tracking-widest",
                    "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75",
                    selected
                      ? "text-orange-600"
                      : "text-borderTab hover:text-orange-600",
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "p-1",
                "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75",
              )}
            >
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-secondaryText leading-5">
                    Problem statement / Description
                  </dt>
                  <dd className="text-sm">{description}</dd>
                </div>
              </dl>
            </Tab.Panel>
            {isStatusDisplay ? (
              <Tab.Panel
                className={classNames(
                  "p-1 text-primaryText",
                  "ring-orange-600 ring-opacity-60 ring-offset-1 ring-offset-orange-600 focus:outline-none focus:ring-1",
                )}
              >
                <dl className="space-y-4">
                  {statusTitle ? (
                    <div>
                      <dt className="text-sm text-secondaryText leading-5">
                        Status
                      </dt>
                      <dd className="text-sm">{statusTitle}</dd>
                    </div>
                  ) : null}
                  {statusDescription ? (
                    <div>
                      <dt className="sr-only">Description</dt>
                      <dd className="text-sm">{statusDescription}</dd>
                    </div>
                  ) : null}
                  {statusLink ? (
                    <div>
                      <dt className="text-sm text-secondaryText leading-5">
                        Read more:
                      </dt>
                      <dd className="text-sm text-orange-600">
                        <a
                          href={statusLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ring-blue-400 focus:outline-none focus:ring-2"
                        >
                          {statusLink}
                        </a>
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </Tab.Panel>
            ) : null}
          </Tab.Panels>
        </Tab.Group>
        <dl className="flex flex-row gap-8 text-sm mt-[26px] px-1 md:px-0 md:pt-4 md:border-t-[1px] md:border-t-borderTabs md:gap-0 md:flex-col md:pl-7 md:basis-[260px] md:min-w-[260px]">
          {startDate ? (
            <div>
              <dt className="text-gray-500">Start Date</dt>
              <dd>{startDate}</dd>
            </div>
          ) : null}
          {endDate ? (
            <div>
              <dt className="text-gray-500">End Date</dt>
              <dd>{endDate}</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </>
  );
};

export default GrantProposalTab;
