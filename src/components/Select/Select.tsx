import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import * as React from "react";
import ArrowDownIcon from "../assets/ArrowDownIcon";

export type Option = { label: string; value?: string; disabled?: boolean };
export type SelectProps = {
  options: Option[];
  value: Option;
  onChange: React.Dispatch<React.SetStateAction<Option>>;
  label: string;
  hideLabel: boolean;
  className?: string;
};

export default function Select({
  label,
  hideLabel = false,
  value,
  onChange,
  options,
  className,
}: SelectProps) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={classNames("gui-relative gui-mt-1", className)}>
        <Listbox.Label
          className={classNames(
            "gui-block gui-pb-1 gui-pl-1 gui-text-select-label gui-font-medium",
            hideLabel ? "gui-sr-only" : "",
          )}
        >
          {label}
        </Listbox.Label>
        <Listbox.Button className="gui-relative gui-h-14 gui-w-full gui-cursor-default gui-rounded-full gui-bg-select-buttonBg gui-text-select-buttonText gui-py-4 gui-px-6 gui-pr-10 gui-text-left gui-shadow-md focus:gui-outline-none focus-visible:gui-border-accentColor focus-visible:gui-ring-2 focus-visible:gui-ring-accentColor focus-visible:gui-ring-opacity-75 focus-visible:gui-ring-offset-1 focus-visible:gui-ring-offset-accentColor sm:gui-text-sm">
          <span className="gui-block gui-font-medium gui-truncate">
            {value.label}
          </span>
          <span className="gui-pointer-events-none gui-absolute gui-inset-y-0 gui-right-5 gui-flex gui-items-center gui-pr-2">
            <ArrowDownIcon
              className="gui-h-5 gui-w-5 gui-text-select-buttonIcon"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="gui-absolute gui-mt-2 gui-max-h-60 gui-w-full gui-overflow-auto gui-rounded-2xl gui-bg-select-boxBg gui-py-2 gui-text-base gui-shadow-lg gui-ring-1 gui-ring-black gui-ring-opacity-5 focus:gui-outline-none sm:gui-text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                className={({ active }) =>
                  classNames(
                    "gui-relative gui-cursor-default gui-select-none gui-py-2 gui-pl-6 gui-pr-4",
                    option.disabled
                      ? "gui-bg-select-boxBg gui-text-select-boxText gui-opacity-75 hover:gui-bg-select-boxBg hover:gui-text-select-boxText"
                      : active
                      ? "gui-bg-select-boxBgActive gui-text-select-boxTextActive"
                      : "gui-bg-select-boxBg gui-text-select-boxText gui-transition hover:gui-bg-select-boxBgHover hover:gui-text-select-boxTextHover",
                  )
                }
                value={option}
              >
                {({ selected }) => (
                  <span
                    className={classNames(
                      "block truncate",
                      selected ? "gui-font-medium" : "gui-font-normal",
                    )}
                  >
                    {option.label}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
