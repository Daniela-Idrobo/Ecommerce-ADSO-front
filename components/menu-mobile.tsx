import { Menu } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Link from "next/link";  

const MenuMobile = () => {
    return ( 
        <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent>
        <Link href="/categorie/camisetas" className="block">
          Camisetas
        </Link>
        <Link href="/categories/pantalones" className="block">
          Patalones
        </Link>
        <Link href="/categories/sacos" className="block">
          Sacos
        </Link>
        <Link href="/categories/vestidos" className="block">
          Vestidos
        </Link>
      </PopoverContent>
    </Popover>
    );
  };

export default MenuMobile;