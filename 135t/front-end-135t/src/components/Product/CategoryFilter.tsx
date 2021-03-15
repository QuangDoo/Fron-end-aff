import { useQuery } from "@apollo/client";
import clsx from "clsx";
import { useTranslation } from "i18n";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { useDebouncedEffect } from "src/hooks/useDebouncedEffect";
import removeAccents from "src/utils/removeAccents";
import DropDown from "../Layout/Form/DropDown";

export default function CategoryFilter() {
  const { t } = useTranslation(["productsSidebar", "searchBar"]);

  const router = useRouter();

  const [inputValue, setInputValue] = useState<string>("");

  const [filterValue, setFilterValue] = useState<string>("");

  //   const [original, setOriginal] = useState<Category[]>([]);

  const mockCategory = [{name:''}]

  useDebouncedEffect(
    () => {
      setFilterValue(removeAccents(inputValue));
    },
    300,
    [inputValue]
  );

  const getAllHref = () => {
    const newQuery = { ...router.query };

    delete newQuery.category;

    return {
      pathname: router.pathname,
      query: newQuery,
    };
  };

  return (
    <DropDown label={t("productsSidebar:category")}>
      <div className="input-group form__input-group has-icon mb-3">
        <i className="fas fa-search form__input-icon" />

        <input
          type="search"
          className="form-control form-control-sm search-input"
          placeholder={t("searchBar:enter_name_category")}
          aria-label="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <Link href={getAllHref()}>
          <a
            className={clsx(
              "products__filter-category",
              !router.query.category && "active"
            )}
          >
            {t("productsSidebar:all")}
          </a>
        </Link>
      </div>

      {filterValue &&
        !original.some(
          (parent) =>
            removeAccents(parent.name).includes(filterValue) ||
            parent.categorySub.some((child) =>
              removeAccents(child.name).includes(filterValue)
            )
        ) && (
          <React.Fragment>
            <div className="search__result--empty">
              {t("searchBar:no_category")} <b>{filterValue}</b>
            </div>

            <hr />
          </React.Fragment>
        )}
    </DropDown>
  );
}
