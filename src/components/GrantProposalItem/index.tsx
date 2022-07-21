import * as React from "react";
import type { AirtableData } from "../../graphql-types";
import IconLink from "../../assets/icon-link.svg";
import ArrowUp from "../../assets/chevron-up.svg";
import { Disclosure, Transition } from "@headlessui/react";
import classNames from "classnames";
import GrantProposalTab from "../GrantProposalTab";

export type GrantProposalItemProps = AirtableData & {
  theme: "milkomeda" | "dcspark" | "flint";
};

const LabelWithValue = ({ label, value }: { label: string; value: any }) => {
  return (
    <p className="flex flex-col">
      <span className=" text-secondaryText text-sm">{label}</span>
      <span className="text-primaryText text-sm font-bold">{value}</span>
    </p>
  );
};

const statusToBgColor: Record<string, string> = {
  Completed: "bg-[#39e27f]",
  Ongoing: "bg-[#f2ca4e]",
  Canceled: "bg-[#dc4747]",
  Default: "bg-gray-600",
};

const GrantProposalItem = (props: GrantProposalItemProps) => {
  return (
    <Disclosure
      as="div"
      className={classNames(
        props.theme,
        "px-0 rounded-r-2xl shadow-card bg-card",
      )}
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            className={classNames(
              "flex min-h-[133px] w-full justify-between pr-4 rounded-r-2xl text-left",
              "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75",
            )}
          >
            <div className="relative pl-[60px] flex flex-1 space-x-4 justify-between py-4">
              <div
                className={classNames(
                  "absolute left-0 top-[122px] w-[122px] h-[42px] transform rotate-[270deg] origin-top-left rounded-bl-[16px]",
                  "flex items-center justify-center text-white font-bold text-xs uppercase tracking-[2px]",
                  statusToBgColor[props.Status ?? "Default"],
                )}
              >
                {props.Status}
              </div>
              <div className="flex flex-1">
                <div>
                  <span className="text-secondaryText text-sm">Proposal</span>
                  <h2 className="text-lg text-primaryText">
                    {props.Project_name}
                  </h2>
                  <a
                    href="https://paulccari.com"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    rel="noopener noreferrer"
                    className="text-md text-orange-600 pointer flex items-center no-underline"
                  >
                    Read More
                    <img src={IconLink} className="w-4 h-4 ml-1" alt="" />
                  </a>
                </div>
              </div>
              <div className="flex flex-1 space-x-4 border-l-gray-500 border-l-[1px] border-dashed pl-8 pr-4">
                {props.Fund ? (
                  <div className="flex-1">
                    <LabelWithValue label="Challenge" value={props.Category} />
                    <LabelWithValue label="Fund" value={`Fund ${props.Fund}`} />
                  </div>
                ) : null}
                <div className="flex-1 space-y-1">
                  {props.Funds_requested ? (
                    <LabelWithValue
                      label="Amount Requested"
                      value={`${props.Funds_requested ?? ""} in ${
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
                "transform rotate-180 h-5 w-5 self-center",
                open && "rotate-[360deg]",
              )}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="border-t-[1px] border-t-gray-500 border-dashed ml-[60px] pt-5 pb-6 mr-4">
              <GrantProposalTab
                description={props.Description}
                startDate={props.Started_on}
                endDate={props.Completed_on}
                statusTitle={props.Status}
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
