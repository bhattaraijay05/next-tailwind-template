import { HoverView, MyText, SafeView } from "@elements/SharedElements";
import { Popover, Transition } from "@headlessui/react";
import {
	ChartBarIcon,
	CursorClickIcon,
	MenuIcon,
	ShieldCheckIcon,
	XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

const solutions = [
	{
		name: "Header 1",
		description: "Header message 1 ",
		href: "#",
		icon: ChartBarIcon,
	},
	{
		name: "Header 2",
		description: "Header message 2",
		href: "#",
		icon: CursorClickIcon,
	},
	{
		name: "Header 3",
		description: "Header message 3",
		href: "#",
		icon: ShieldCheckIcon,
	},
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const [openSolution, setOpenSolution] = useState(false);
	return (
		<Popover className="sticky bg-purple-700 dark:bg-black top-0">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-gray-100 py-6 md:py-4 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="#">
							<p className="font-bold text-2xl text-white">
								Project Title
							</p>
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Popover.Button className="bg-purple-700 dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none  ">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group
						as="nav"
						className="hidden md:flex space-x-10"
					>
						<Popover
							className="relative"
							onMouseOver={() => setOpenSolution(true)}
							onMouseLeave={() => setOpenSolution(false)}
						>
							{() => (
								<>
									<Popover.Button
										className={classNames(
											"text-white",
											"group bg-purple-700 dark:bg-black rounded-md inline-flex items-center text-base font-medium focus:outline-none "
										)}
									>
										<span>Header</span>
										<ChevronDownIcon
											className={classNames(
												"text-white",
												"ml-2 h-5 w-5 group-hover:text-white"
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										show={openSolution}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
											<SafeView className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
												<SafeView className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
													{solutions.map((item) => (
														<HoverView
															className="-m-3 p-3"
															key={item.name}
														>
															<a
																href={item.href}
																className=" flex items-start"
															>
																<item.icon
																	className="flex-shrink-0 h-6 w-6 text-indigo-600 "
																	aria-hidden="true"
																/>
																<div className="ml-4">
																	<MyText className="text-base font-medium ">
																		{
																			item.name
																		}
																	</MyText>
																	<MyText className="mt-1 font-small">
																		{
																			item.description
																		}
																	</MyText>
																</div>
															</a>
														</HoverView>
													))}
												</SafeView>
											</SafeView>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>

						<a
							href="#"
							className="text-base font-medium text-white border-b-2 transition-all duration-500  hover:border-b-2 dark:hover:border-gray-50 border-purple-700 hover:border-gray-50 dark:border-gray-900"
						>
							Header
						</a>
						<a
							href="#"
							className="text-base font-medium text-white border-b-2 transition-all  hover:border-b-2 duration-500 dark:hover:border-gray-50 border-purple-700 hover:border-gray-50 dark:border-gray-900"
						>
							Header
						</a>
					</Popover.Group>
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<a
							href="https://discord.com"
							className="whitespace-nowrap text-base font-medium text-white "
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/discord.png"
								alt="discord"
								width="35"
								height="35"
							/>
						</a>
						<a
							href="https://twitter.com"
							className="px-4 py-2 whitespace-nowrap text-base font-medium text-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="/twitter.png"
								alt="twitter"
								width="33"
								height="33"
							/>
						</a>
					</div>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 inset-x-0 p-4 transition transform origin-top-right md:hidden bg-purple-700 dark:bg-black"
				>
					<SafeView className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  divide-y-2 divide-gray-50">
						<SafeView className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt="Workflow"
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ">
										<span className="sr-only">
											Close menu
										</span>
										<XIcon
											className="h-6 w-6"
											aria-hidden="true"
										/>
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{solutions.map((item) => (
										<HoverView
											className="-m-3 p-3"
											key={item.name}
										>
											<a
												href={item.href}
												className=" flex items-start"
											>
												<item.icon
													className="flex-shrink-0 h-6 w-6 text-indigo-600"
													aria-hidden="true"
												/>
												<MyText className="ml-3">
													{item.name}
												</MyText>
											</a>
										</HoverView>
									))}
								</nav>
							</div>
						</SafeView>
					</SafeView>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
