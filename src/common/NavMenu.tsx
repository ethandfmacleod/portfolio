import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@ui/navigation-menu'
import { Link } from 'react-router-dom'
import { ListItem } from '@common/NavMenuListItem'
import { otherNavItems, projectNavItems } from '@config/menu'

export function NavMenu() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent className="w-80">
                            <ul className="grid gap-3 p-4 grid-cols-1 w-[200px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                Pinch Analysis
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                A modular service for heat
                                                optimization in industrial
                                                processes.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                {projectNavItems.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Other</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-3 p-4">
                                {otherNavItems.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="https://github.com/ethandfmacleod">
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                GitHub
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link to="/about-me">
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                About Me
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}
