export const SET_CATEGORIES = "SET_CATEGORIES";
export const PICK_CATEGORY = "PICK_CATEGORY";

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    categories,
  };
};

export const pickCategory = (category) => {
  return {
    type: PICK_CATEGORY,
    category,
  };
};
