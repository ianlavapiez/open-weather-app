import React, { ComponentPropsWithoutRef } from "react";

import "./SearchField.css";

type SearchFieldProps = ComponentPropsWithoutRef<"input"> & {};

const SearchField: React.FC<SearchFieldProps> = ({ ...inputProps }) => {
  return <input className="search-field" {...inputProps} />;
};

export default SearchField;
