import { Fragment, SyntheticEvent } from "react"
import { Transition, Dialog } from "@headlessui/react"

const ConfirmModal = ({
    showModal,
    onClose,
    projectUrls
}: {
    showModal: boolean;
    onClose: () => void;
    modalRef?: any;
    projectUrls: string;
}): any => {
    const openSite = (event: SyntheticEvent) => {
        event.preventDefault()
        window.open(projectUrls)
    }
    return (
        <Fragment>
            <Transition appear show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-heading-5 font-gilroy-bold leading-6 text-gray-900"
                                    >
                                        Are you sure want to open ?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4 flex space-x-3">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-semantic-success-main px-4 py-2 text-sm font-gilroy-semibold text-neutral-10 hover:bg-semantic-success-hover focus:outline-none"
                                            onClick={openSite}
                                        >
                                            Yes, Open
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-semantic-danger-main px-4 py-2 text-sm font-gilroy-semibold text-neutral-10 hover:bg-semantic-danger-hover focus:outline-none"
                                            onClick={onClose}
                                        >
                                            No, Thanks
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Fragment>
    )
}

export default ConfirmModal