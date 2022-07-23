import React from "react";
import type { AirtableData } from "../../graphql-types";
import IconLink from "../../assets/icon-link.svg";
import ArrowUp from "../../assets/chevron-up.svg";
import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import GrantProposalTab from "../GrantProposalTab/GrantProposalTab";

export type GrantProposalItemProps = AirtableData & {
  theme: "milkomeda" | "dcspark" | "flint";
};

const LabelWithValue = ({ label, value }: { label: string; value: any }) => {
  return (
    <p className="gui-flex gui-flex-col">
      <span className="gui-text-secondaryText gui-text-sm">{label}</span>
      <span className="gui-text-primaryText gui-text-sm gui-font-bold">
        {value}
      </span>
    </p>
  );
};

const statusToBgColor: Record<string, string> = {
  Completed: "gui-bg-status-completed",
  Ongoing: "gui-bg-status-ongoing",
  Canceled: "gui-bg-status-canceled",
  Default: "gui-bg-status-default",
};

const GrantProposalItem = (props: GrantProposalItemProps) => {
  return (
    <Disclosure
      as="div"
      className={classNames(
        props.theme,
        "gui-px-0 gui-rounded-r-2xl gui-shadow-card gui-bg-card",
      )}
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              "gui-flex gui-flex-col gui-min-h-[133px] gui-w-full gui-justify-between gui-pr-4 gui-rounded-r-2xl gui-text-left",
              "focus:gui-outline-none focus-visible:gui-ring focus-visible:gui-ring-orange-600 focus-visible:gui-ring-opacity-75",
              "md:gui-flex-row",
            )}
          >
            <div
              className={classNames(
                "gui-relative gui-w-full gui-pl-9 sm:gui-pl-12 gui-flex gui-flex-1 gui-flex-col gui-space-x-4 gui-justify-between gui-py-4",
                "md:gui-flex-row md:gui-pl-[60px]",
              )}
            >
              <div
                className={classNames(
                  "gui-absolute gui-left-0 gui-top-[122px] gui-w-[122px] gui-h-[42px] gui-transform gui-rotate-[270deg] gui-origin-top-left gui-rounded-bl-[16px]",
                  "gui-flex gui-items-center gui-justify-center gui-text-white gui-font-bold gui-text-xs gui-uppercase gui-tracking-[2px]",
                  statusToBgColor[props.Status ?? "Default"],
                )}
              >
                {props.Status}
              </div>
              <div className="gui-flex gui-flex-1 gui-pb-8 md:gui-py-0 gui-border-b-gray-500 gui-border-b-[1px] gui-border-dashed md:gui-border-b-0">
                <div>
                  <span className="gui-text-secondaryText gui-text-sm">
                    Proposal
                  </span>
                  <h2 className="gui-text-lg gui-text-primaryText">
                    {props.Project_name}
                  </h2>
                  <a
                    href="https://paulccari.com"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    rel="noopener noreferrer"
                    className="gui-text-md gui-text-orange-600 gui-pointer gui-flex gui-items-center gui-no-underline"
                  >
                    Read More
                    <img
                      src={IconLink}
                      className="gui-w-4 gui-h-4 gui-ml-1"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div
                className={classNames(
                  "gui-flex gui-flex-1 gui-flex-col",
                  "sm:gui-flex-row sm:gui-space-x-4 gui-py-4",
                  "md:gui-border-l-gray-500 md:gui-border-l-[1px] md:gui-border-dashed md:gui-pr-4 md:gui-pl-8 md:gui-py-0",
                )}
              >
                {props.Fund ? (
                  <div className="gui-flex-1 gui-space-y-1 gui-mb-1 md:gui-mb-0">
                    <LabelWithValue label="Challenge" value={props.Category} />
                    <LabelWithValue label="Fund" value={`Fund ${props.Fund}`} />
                  </div>
                ) : null}
                <div className="gui-flex-1 gui-space-y-1">
                  {props.USD_equivalent ? (
                    <LabelWithValue
                      label="Amount Requested"
                      value={`${props.USD_equivalent ?? ""} in ${
                        props.Currency
                      } `}
                    />
                  ) : null}
                  <LabelWithValue
                    label="Project Lead"
                    value={props.Project_Lead}
                  />
                </div>
              </div>
            </div>
            <img
              src={ArrowUp}
              alt=""
              className={classNames(
                "gui-transform gui-rotate-180 gui-h-5 gui-w-5 gui-self-center gui-mb-2 gui-ml-4 md:gui-mb-0 md:gui-ml-0",
                open && "gui-rotate-[360deg]",
              )}
            />
          </Disclosure.Button>
          <Transition
            enter="gui-transition gui-duration-100 gui-ease-out"
            enterFrom="gui-transform gui-scale-95 gui-opacity-0"
            enterTo="gui-transform gui-scale-100 gui-opacity-100"
            leave="gui-transition gui-duration-75 gui-ease-out"
            leaveFrom="gui-transform gui-scale-100 gui-opacity-100"
            leaveTo="gui-transform gui-scale-95 gui-opacity-0"
          >
            <Disclosure.Panel className="gui-border-t-[1px] gui-border-t-gray-500 gui-border-dashed gui-ml-12 sm:gui-ml-16 md:gui-ml-[60px] gui-pt-5 gui-pb-6 gui-mr-4">
              <GrantProposalTab
                description={props.Description}
                startDate={props.Started_on}
                endDate={props.Completed_on}
                statusTitle={props.Status_title}
                statusDescription={props.Status_description}
                statusLink={props.Status_desc_link1}
              />
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default GrantProposalItem;
