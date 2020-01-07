import React, { useContext, useState, SetStateAction, useEffect } from "react"
import { CategoriesJson, SubCategoriesJson } from "./types/graphql";
import queryString from "query-string";

type FiltersContext = {
  categoryFilters: string[];
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>;
  subCategoryFilters: string[];
  setSubCategoryFilters: React.Dispatch<SetStateAction<string[]>>;
  categoryFiltersTouched: boolean;
  setCategoryFiltersTouched: React.Dispatch<SetStateAction<boolean>>;
  subCategoryFiltersTouched: boolean;
  setSubCategoryFiltersTouched: React.Dispatch<SetStateAction<boolean>>;
}

export const FiltersContext = React.createContext<FiltersContext>(
  {} as FiltersContext
);

const FiltersProvider: React.FC = ({ children }) => {
  const [categoryFilters, setCategoryFilters] = useState<
    string[]
  >([]);
  const [subCategoryFilters, setSubCategoryFilters] = useState<
    string[]
  >([]);
  const [categoryFiltersTouched, setCategoryFiltersTouched] = useState(false);
  const [subCategoryFiltersTouched, setSubCategoryFiltersTouched] = useState(false);

  return (
    <FiltersContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        subCategoryFilters,
        setSubCategoryFilters,
        categoryFiltersTouched,
        setCategoryFiltersTouched,
        subCategoryFiltersTouched,
        setSubCategoryFiltersTouched
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export const useFilters = () => useContext(FiltersContext)

export default FiltersProvider;
