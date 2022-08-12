import { Listbox, Tab as HUITab, Transition } from "@headlessui/react";
import classNames from "classnames";
import * as React from "react";

export type TabGroupProps = {
  options: { name: string; component: React.ReactNode; disabled?: boolean }[];
  className?: string;
};

const Tab = ({
  disabled = false,
  children,
}: {
  disabled?: boolean;
  children: React.ReactNode;
}) => (
  <HUITab
    disabled={disabled}
    className={({ selected }) =>
      classNames(
        "gui-w-full gui-rounded-[40px] gui-p-2 gui-text-sm gui-font-medium gui-leading-5",
        selected
          ? "gui-bg-tabgroup-tabBgActive gui-text-tabgroup-tabTextActive"
          : "gui-bg-tabgroup-tabBg gui-text-tabgroup-tabText transition hover:gui-text-tabgroup-tabTextActive",
      )
    }
  >
    {children}
  </HUITab>
);
const TabPanel = ({ children }: { children: React.ReactNode }) => (
  <HUITab.Panel
    className={classNames("rounded-xl gui-p-3", "focus:gui-outline-none")}
  >
    {children}
  </HUITab.Panel>
);

export default function GrantsTab({ options, className }: TabGroupProps) {
  return (
    <HUITab.Group as="div" className={className}>
      <HUITab.List className="gui-max-w-[288px] md:gui-max-w-[516px] gui-mx-auto gui-flex gui-space-x-1 gui-bg-tabgroup-listBg gui-p-2 gui-rounded-[160px] gui-h-[64px] gui-shadow-tabGroup gui-mb-2 md:gui-mb-16">
        {options.map((option) => (
          <Tab key={option.name} disabled={option.disabled}>
            {option.name}
          </Tab>
        ))}
      </HUITab.List>
      <HUITab.Panels className="gui-mt-2">
        {options.map((option) => (
          <TabPanel key={option.name}>{option.component}</TabPanel>
        ))}
      </HUITab.Panels>
    </HUITab.Group>
  );
}
