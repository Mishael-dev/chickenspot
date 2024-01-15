import { H1 } from "@/components/ui/Typography";
import Container from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import MenuCard from "@/components/MenuCard";

const Page = () => {
  return (
    <div className="pb-80">
      <Container>
        <H1>Menu</H1>
        <div className="mt-4 mb-4">
          Items in Cart <Badge>4</Badge>
        </div>

        <section>
          <MenuCard />
        </section>
      </Container>
    </div>
  );
};

export default Page;
