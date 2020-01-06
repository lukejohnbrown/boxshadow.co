import React, { useContext, useState, SetStateAction } from "react"
import { CategoriesJson, SubCategoriesJson } from "./types/graphql";

type FiltersContext = {
  categoryFilters: CategoriesJson["categoryID"][];
  setCategoryFilters: React.Dispatch<SetStateAction<CategoriesJson["categoryID"][]>>;
  subCategoryFilters: SubCategoriesJson["subCategoryID"][];
  setSubCategoryFilters: React.Dispatch<SetStateAction<SubCategoriesJson["subCategoryID"][]>>;
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
    CategoriesJson["categoryID"][]
  >([]);
  const [subCategoryFilters, setSubCategoryFilters] = useState<
    SubCategoriesJson["subCategoryID"][]
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
