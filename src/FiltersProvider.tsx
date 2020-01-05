import React, { useContext, useState, SetStateAction } from "react"
import { CategoriesJson, SubCategoriesJson } from "./types/graphql";

type FiltersContext = {
  categoryFilters: CategoriesJson["categoryID"][]
  setCategoryFilters: React.Dispatch<SetStateAction<CategoriesJson["categoryID"][]>>
  subCategoryFilters: SubCategoriesJson["subCategoryID"][]
  setSubCategoryFilters: React.Dispatch<SetStateAction<SubCategoriesJson["subCategoryID"][]>>
}

export const FiltersContext = React.createContext<FiltersContext>(
  {} as FiltersContext
);

const FiltersProvider: React.FC = ({ children }) => {
  const [categoryFilters, setCategoryFilters] = useState<
    CategoriesJson["categoryID"][]
  >([])
  const [subCategoryFilters, setSubCategoryFilters] = useState<
    SubCategoriesJson["subCategoryID"][]
  >([])

  return (
    <FiltersContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        subCategoryFilters,
        setSubCategoryFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

export const useFilters = () => useContext(FiltersContext)

export default FiltersProvider;
