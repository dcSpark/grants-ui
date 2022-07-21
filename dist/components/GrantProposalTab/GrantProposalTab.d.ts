import { Maybe } from "../../graphql-types";
declare const GrantProposalTab: ({ description, statusTitle, statusDescription, statusLink, startDate, endDate, }: {
    description: Maybe<string> | undefined;
    statusTitle: Maybe<string> | undefined;
    statusDescription: Maybe<string> | undefined;
    statusLink: Maybe<string> | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
}) => JSX.Element;
export default GrantProposalTab;
