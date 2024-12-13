import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

interface Props {
    status: Status
}

const statusMap: Record<Status, {label: string, color: "red" | "violet" | "green"}> = {
    OPEN: {label: "Open", color: "red"},
    IN_PROGRESS: {label: "In progress", color: "violet"},
    CLOSED: {label: "Close", color: "green"}
}

const IssueStatusBar = ({status}: Props) => {
  return <div>
    <Badge color={statusMap[status].color}>
        {statusMap[status].label}
    </Badge>
  </div>;
};

export default IssueStatusBar;
