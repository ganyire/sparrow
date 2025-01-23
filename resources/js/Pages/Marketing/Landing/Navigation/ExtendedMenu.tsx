import {
    Button,
    cn,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from '@heroui/react';
import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../../menu';

type ExtendedMenuProps = {
    activeSection: string;
};

const ExtendedMenu = (props: ExtendedMenuProps) => {
    const { activeSection } = props;

    return (
        <nav className="flex h-[65px] items-center justify-between gap-4 rounded-full bg-white px-6 shadow-[0_0_13px_rgba(0,0,0,0.06)] shadow-gray-200">
            <span className="text-2xl">iLanding</span>

            <div className="flex items-center justify-center gap-4">
                {menuItems.map((item) => {
                    if (item.id === 'dropdown') {
                        return (
                            <Dropdown key={item.id}>
                                <DropdownTrigger>
                                    <Button
                                        variant="light"
                                        className="text-md hover:!text-primary-dark flex items-center font-sans text-gray-700 hover:!bg-white"
                                    >
                                        Dropdown
                                        <ChevronDown className="stroke-1" />
                                    </Button>
                                </DropdownTrigger>

                                <DropdownMenu aria-label="actions">
                                    <DropdownItem key="dd1">
                                        Dropdown 1
                                    </DropdownItem>
                                    <DropdownItem key="dd2">
                                        Dropdown 2
                                    </DropdownItem>
                                    <DropdownItem key="dd2">
                                        Dropdown 2
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        );
                    }
                    return (
                        <Link
                            key={item.id}
                            href={`#${item.id}`}
                            className={cn('hover:!text-primary-dark', {
                                'text-primary-dark': activeSection === item.id,
                            })}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </div>

            <Link
                href="#about"
                className="bg-primary-dark flex h-[35px] w-28 items-center justify-center rounded-full text-white"
            >
                Get Started
            </Link>
        </nav>
    );
};

export default ExtendedMenu;
