import prisma from "@/prisma/client"
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
        <p>{issue.title}</p>
        <p>{issue.description}</p>
        <p>{issue.createdAt.toDateString()}</p>
        <p>{issue.status}</p>
    </div>
  )
}

export default issuePage