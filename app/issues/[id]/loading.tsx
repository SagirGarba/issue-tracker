import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

const loadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="5" my="3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose mt-12">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default loadingIssueDetailPage;
