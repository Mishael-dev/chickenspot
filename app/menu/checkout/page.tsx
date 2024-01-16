import { H1 } from "@/components/ui/Typography";
import Container from "@/components/ui/container";
import CheckoutTab from "@/components/CheckoutTab";

const page = () => {
  return (
    <div className="pb-60">
      <Container>
        <H1>Checkout</H1>
        <CheckoutTab />
      </Container>
    </div>
  );
};

export default page;
