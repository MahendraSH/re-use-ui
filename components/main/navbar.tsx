import { FC } from "react";
import { Button } from "@/components/ui/button";
import { BoxIcon } from "lucide-react";
import { docs } from "@/data/docs";
import Link from "next/link";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className=" flex justify-start items-center min-h-16 py-1 fixed top-0 shadow-sm shadow-muted-foreground w-full ">
      <Button variant={"navbar"}>
        <BoxIcon className=" size-6 mr-2" />
        Re-use-ui
      </Button>
      {/*  switcher  */}
      {/*  search box  */}
      <div className="flex items-center justify-end ml-auto px-4 gap-x-4">
        {docs.map((doc) => (
          <Link key={doc.label} href={doc.link}>
            <Button variant={"ghost"}>{doc.label}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
