

import { BreadcrumbPage } from "@/components/ui/breadcrumb"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon, EyeSlashIcon } from "@heroicons/react/16/solid"
import { SlashIcon } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigator() {
    const pathName = usePathname();
    let alldirs = pathName.split("/").splice(1);

    console.log(alldirs)
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {
           alldirs.length>1 &&  alldirs.map(item=>(
                <>
                <BreadcrumbSeparator>
                <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                <BreadcrumbLink href={`/${item}`}>{item}</BreadcrumbLink>
                </BreadcrumbItem>
                </>
            ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
