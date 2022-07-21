import type { AirtableData } from "../../graphql-types";
export declare type GrantProposalItemProps = AirtableData & {
    theme: "milkomeda" | "dcspark" | "flint";
};
declare const GrantProposalItem: (props: GrantProposalItemProps) => JSX.Element;
export default GrantProposalItem;
