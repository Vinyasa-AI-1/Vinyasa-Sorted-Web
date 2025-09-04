import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useTranslation } from "@/lib/translations";

interface MenuItemProps {
  label: string;
  href?: string;
  children?: MenuItemProps[];
  onClick?: () => void;
}

function MenuItem({ label, href, children, onClick }: MenuItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (children) {
    return (
      <div className="w-full">
        <div 
          className="flex items-center justify-between w-full px-4 py-2 text-left text-forest hover:bg-sage/10 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          data-testid={`menu-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <span className="font-medium">{label}</span>
          {isExpanded ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </div>
        {isExpanded && (
          <div className="ml-6 border-l border-sage/20">
            {children.map((child, index) => (
              <MenuItem key={index} {...child} />
            ))}
          </div>
        )}
      </div>
    );
  }
  
  if (href) {
    return (
      <Link href={href}>
        <div 
          className="block w-full px-4 py-2 text-left text-forest hover:bg-sage/10 cursor-pointer"
          onClick={onClick}
          data-testid={`menu-link-${label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {label}
        </div>
      </Link>
    );
  }
  
  return (
    <div 
      className="block w-full px-4 py-2 text-left text-forest hover:bg-sage/10 cursor-pointer"
      onClick={onClick}
      data-testid={`menu-item-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {label}
    </div>
  );
}

export default function ExpandableMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const { t } = useTranslation(currentLanguage);
  
  const closeMenu = () => setIsOpen(false);
  
  const menuItems: MenuItemProps[] = [
    { 
      label: "Vinyasa Home", 
      href: "/",
      onClick: closeMenu 
    },
    {
      label: t('producers'),
      children: [
        { 
          label: t('producersSortedDashboard'), 
          href: "/producer",
          onClick: closeMenu 
        },
        { 
          label: t('liveProduceSorting'), 
          href: "/live-produce-sorting",
          onClick: closeMenu 
        },
        { 
          label: t('harvestMarketplace'), 
          href: "/harvest-marketplace",
          onClick: closeMenu 
        },
        { 
          label: t('harvestOptimizations'), 
          href: "/harvest-optimizations",
          onClick: closeMenu 
        }
      ]
    },
    {
      label: t('consumers'),
      children: [
        { 
          label: t('consumersCentralOpsDashboard'), 
          href: "/customer-central",
          onClick: closeMenu 
        },
        { 
          label: t('liveWasteSorting'), 
          href: "/live-waste-sorting",
          onClick: closeMenu 
        },
        { 
          label: t('recyclersMarketplace'), 
          href: "/recyclers-marketplace",
          onClick: closeMenu 
        },
        { 
          label: t('wasteReduction'), 
          href: "/waste-reduction",
          onClick: closeMenu 
        }
      ]
    },
    { 
      label: t('productDemos'), 
      href: "/product-demos",
      onClick: closeMenu 
    },
    { 
      label: t('aboutUs'), 
      href: "/about",
      onClick: closeMenu 
    },
    { 
      label: t('contactUs'), 
      href: "/contact",
      onClick: closeMenu 
    }
  ];
  
  return (
    <div className="relative">
      {/* Menu trigger button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-sage hover:text-white hover:bg-sage/20"
        data-testid="menu-toggle-button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20" 
          onClick={closeMenu}
          data-testid="menu-overlay"
        />
      )}
      
      {/* Menu content */}
      {isOpen && (
        <Card className="absolute top-full right-0 w-80 mt-2 z-50 shadow-xl border-sage/20">
          <CardContent className="p-0">
            {/* Menu items */}
            <div className="max-h-96 overflow-y-auto">
              {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}