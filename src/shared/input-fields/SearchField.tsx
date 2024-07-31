import React, { ComponentPropsWithoutRef } from "react";

type SearchFieldProps = ComponentPropsWithoutRef<"input"> & {};

const SearchField: React.FC<SearchFieldProps> = ({ ...inputProps }) => {
  return <input {...inputProps} />;
};

export default SearchField;
