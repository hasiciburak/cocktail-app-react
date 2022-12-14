import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { US, ES, CN, IT, FR, DE } from "country-flag-icons/react/3x2";
import PropTypes from "prop-types";

function LangOptions(props) {
  return (
    <Menu as="div" className="relative inline-block float-right">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md white px-4 py-2 text-sm font-medium bg-yellow-500 text-white hover:bg-opacity-60 duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Select Language
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-inherit hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-yellow-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setLanguage("EN")}
                >
                  <US title="United States" className="w-5 mr-2" />
                  English
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-yellow-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setLanguage("DE")}
                >
                  <DE title="German" className="w-5 mr-2" />
                  German
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-yellow-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setLanguage("FR")}
                >
                  <FR title="French" className="w-5 mr-2" />
                  French
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-yellow-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setLanguage("ES")}
                >
                  <ES title="Spanish" className="w-5 mr-2" />
                  Spanish
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-yellow-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setLanguage("IT")}
                >
                  <IT title="Italian" className="w-5 mr-2" />
                  Italian
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-yellow-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setLanguage("HANT")}
                >
                  <CN title="Mandarin Chinese" className="w-5 mr-2" />
                  Mandarin Chinese
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-yellow-900 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={() => props.setLanguage("HANS")}
                >
                  <CN title="Simplified Chinese" className="w-5 mr-2" />
                  Simplified Chinese
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

LangOptions.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func,
};

export default LangOptions;
