import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Header3 from "../../../components/styled/Header3.styled";
import PropTypes from "prop-types";

export default function IngredientsArea({ selectedCocktail }) {
  return (
    <div className="w-inherit mt-2">
      <div className="w-full rounded-md bg-gray-900 bg-opacity-5 p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center w-full justify-between rounded-md bg-gray-900 bg-opacity-10 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <Header3>Ingredients</Header3>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black">
                <ul>
                  {Array.apply(0, Array(10)).map(function (x, i) {
                    return (
                      selectedCocktail[`strIngredient${i}`] != null && (
                        <li key={i} className="list-disc ml-4">
                          {selectedCocktail[`strIngredient${i}`]} &nbsp;
                          {selectedCocktail[`strMeasure${i}`]}
                        </li>
                      )
                    );
                  })}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

IngredientsArea.propTypes = {
  selectedCocktail: PropTypes.object,
};
