
export const updateFilter = (prop, value) => ({
   type: "UPDATE_FILTER",
   payload: {prop, value}
})

export const updateFilterBySize = (prop, value) => ({
   type: "UPDATE_FILTER_BY_SIZE",
   payload: {prop, value}
})