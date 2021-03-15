import { useRouter } from "next/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import NumberFormat from "react-number-format";

export default function PriceFilter() {
  const router = useRouter();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      priceFrom: router.query.priceFrom,
      priceTo: router.query.priceTo,
    },
  });

  const onPriceRangeSubmit = (data) => {
    const newQuery = {
      ...router.query,
    };

    if (data.priceFrom) newQuery.priceFrom = data.priceFrom;
    else delete newQuery.priceFrom;

    if (data.priceTo) newQuery.priceTo = data.priceTo;
    else delete newQuery.priceTo;

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
  };

  return (
    <form onSubmit={handleSubmit(onPriceRangeSubmit)}>
      <p>Giá Khoảng</p>

      <div className="d-flex align-items-center row mb-3 mx-0">
        <Controller
          name="priceFrom"
          control={control}
          render={({ onChange, value }) => (
            <NumberFormat
              placeholder="Giá từ"
              className="form-control no-spinner col"
              inputMode="numeric"
              thousandSeparator="."
              decimalSeparator=","
              onValueChange={(values) => onChange(values.floatValue)}
              value={value}
              allowNegative={false}
            />
          )}
        />

        <div className="mx-2">&#8212;</div>

        <Controller
          name="priceTo"
          control={control}
          render={({ onChange, value }) => (
            <NumberFormat
              placeholder="Giá đến"
              className="form-control no-spinner col"
              inputMode="numeric"
              thousandSeparator="."
              decimalSeparator=","
              onValueChange={(values) => onChange(values.floatValue)}
              value={value}
              allowNegative={false}
            />
          )}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Apply
      </button>
    </form>
  );
}
