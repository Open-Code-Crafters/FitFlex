import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { icons, Menu } from "lucide-react"; // Import the icons object
  import { NavLink } from "react-router-dom";
  import fitnessPrimaryLogo from "../assets/fitness1.png";
  import { useState } from "react";
  
  const pages = [
    { name: "Home", icon: "House" },      // Make sure to use correct string names of the icons
    { name: "About", icon: "Info" },
    { name: "Contact", icon: "Phone" },
    { name: "Blog", icon: "Book" },
    { name: "Services", icon: "Cog" },
    { name: "Login", icon: "User" },
    { name: "Register", icon: "UserPlus" },
  ];
  
  export  function SheetDemo() {
    const [isOpen, setIsOpen] = useState(false); // State to control the sheet
  
    // Function to close the sheet
    const handleClose = () => setIsOpen(false);
  
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="py-2 px-2" onClick={() => setIsOpen(true)}>
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>
              <div className="h-full w-full flex justify-center">
                <img className="h-24 w-24 items-center text-center" src={fitnessPrimaryLogo} alt="Logo" />
              </div>
            </SheetTitle>
            <SheetDescription>
              {pages.map((page, index) => {
                const Icon = icons[page.icon]; // Dynamically access the icon component
  
                return (
                  <div key={index} className="flex text-base items-center my-2">
                    {Icon && <Icon className="mr-2 w-4 h-4" />} {/* Render the icon if it exists */}
                    <NavLink
                      to={`/${page.name.toLowerCase()}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-600 font-bold flex items-center" // Active link styling
                          : "text-gray-800 flex items-center"
                      }
                      onClick={handleClose} // Close the sheet when a link is clicked
                    >
                      {page.name}
                    </NavLink>
                  </div>
                );
              })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }
  