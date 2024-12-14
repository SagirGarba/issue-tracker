import IssueStatusBar from "@/app/components/IssueStatusBar";
import prisma from "@/prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";

interface Props {
    params: {id: string}
}

const issuePage = async ({params}: Props) => {

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
    });

    if(!issue)
        notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="5" my="3">
        <IssueStatusBar status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
      <Card>
        <p>{issue.description}</p>
      </Card>
    </div>
  );
}

export default issuePage