import * as React from "react";
import { RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import * as Tooltip from "@radix-ui/react-tooltip";

export type FilterOption = {
  label: string;
  value: string;
  aditionalText: string;
  tooltipInfo?: string;
  icon?: JSX.Element;
};
export type FilterListProps = {
  value: any;
  onChange: React.Dispatch<React.SetStateAction<FilterOption>>;
  groupLabel: string;
  className: string;
  options: FilterOption[];
};

export default function FilterList({
  value,
  onChange,
  groupLabel,
  options,
  className,
}: FilterListProps) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      <RadioGroup.Label className="gui-sr-only">{groupLabel}</RadioGroup.Label>
      <div
        className={classNames(
          "gui-grid gui-gap-3 gui-grid-col-1",
          "md:gui-gap-6 md:gui-grid-cols-filterList",
          className,
        )}
      >
        {options?.map((item) => (
          <RadioGroup.Option
            key={item.value}
            value={item.value}
            className={({ active, checked }) =>
              classNames(
                "gui-relative gui-flex gui-cursor-pointer gui-rounded-2xl gui-px-5 gui-py-3 md:gui-py-4 gui-shadow-md gui-focus:outline-none md:gui-min-h-[150px] gui-shadow-filterOption",
                active
                  ? "gui-ring-offset-2 gui-ring-offset-filterOption-bgActive gui-ring-opacity-60 "
                  : "",
                checked
                  ? "gui-bg-filterOption-bgActive gui-text-filterOption-textPrimary"
                  : "gui-bg-filterOption-bgDefault gui-text-filterOption-textPrimary gui-transition hover:gui-bg-filterOption-bgHover",
              )
            }
          >
            {({ active, checked }) => (
              <>
                {item.tooltipInfo ? (
                  <div className="gui-absolute gui-top-3 gui-right-3">
                    <Tooltip.Provider>
                      <Tooltip.Root delayDuration={0}>
                        <Tooltip.Trigger>
                          <InfoIcon className="gui-text-filterOption-tooltipIcon" />
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content className="gui-max-w-[220px] gui-text-sm gui-text-filterOption-tooltipText gui-bg-filterOption-tooltipBg gui-rounded-md gui-px-4 gui-py-2 gui-shadow-tooltipContent">
                            {item.tooltipInfo}
                            <Tooltip.Arrow className="gui-fill-filterOption-tooltipBg" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  </div>
                ) : null}
                <div className="gui-flex gui-flex-row md:gui-flex-col gui-text-sm gui-w-full md:gui-justify-center gui-items-center">
                  {item?.icon}
                  <RadioGroup.Label
                    as="p"
                    className={classNames(
                      "gui-font-bold gui-text-md md:gui-text-xl gui-ml-3 md:gui-ml-0 md:gui-mb-1 md:gui-mt-3",
                      item?.icon == null && "gui-ml-0",
                      checked
                        ? "gui-text-filterOption-textPrimary-active"
                        : "gui-text-filterOption-textPrimary",
                    )}
                  >
                    {item.label}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(
                      "gui-hidden md:gui-block gui-font-medium gui-text-sm",
                      checked
                        ? "gui-text-filterOption-textSecondary-active"
                        : "gui-text-filterOption-textSecondary",
                    )}
                  >
                    {item.aditionalText}
                  </RadioGroup.Description>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
function InfoIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" className={className}>
      <path
        d="M10 1.66667c-4.59497 0-8.33333 3.73836-8.33333 8.33333 0 4.595 3.73836 8.3333 8.33333 8.3333 4.595 0 8.3333-3.7383 8.3333-8.3333 0-4.59497-3.7383-8.33333-8.3333-8.33333Zm0 1.25c3.9194 0 7.0833 3.16391 7.0833 7.08333 0 3.9194-3.1639 7.0833-7.0833 7.0833-3.91942 0-7.08333-3.1639-7.08333-7.0833 0-3.91942 3.16391-7.08333 7.08333-7.08333Zm0 2.91666c-.22101 0-.43298.0878-.58926.24408-.15628.15628-.24407.36824-.24407.58926 0 .22101.08779.43297.24407.58925C9.56702 7.4122 9.77899 7.5 10 7.5c.221 0 .433-.0878.5893-.24408.1562-.15628.244-.36824.244-.58925 0-.22102-.0878-.43298-.244-.58926-.1563-.15628-.3683-.24408-.5893-.24408Zm-.00977 2.90772c-.16561.00258-.32343.0708-.43879.18967-.11536.11887-.17882.27866-.17644.44428v4.5833c-.00117.0829.01413.1651.04501.2419.03089.0769.07674.1468.13489.2058.05815.059.12745.1058.20386.1378s.15841.0484.24124.0484c.0828 0 .1648-.0164.2412-.0484.0765-.032.1457-.0788.2039-.1378.0582-.059.104-.1289.1349-.2058.0309-.0768.0462-.159.045-.2419V9.375c.0012-.08365-.0144-.1667-.0459-.24421-.0315-.07751-.0782-.14791-.1374-.20703-.0592-.05912-.1297-.10575-.2072-.13714-.0776-.03138-.1606-.04688-.24427-.04557Z"
        fill="currentColor"
      />
    </svg>
  );
}
