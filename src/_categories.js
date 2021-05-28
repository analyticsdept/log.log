class LogLogCategories {
  constructor({ categories = null }) {
    this.categories = categories;
  }
  check(category = null) {
    if (!Array.isArray(category)) {
      category = [category];
    }
    for (let cat in category) {
      if (category[cat] === null) {
        return true;
      } else if (this.categories === null || this.categories === undefined) {
        return true;
      } else if (category[cat] in this.categories) {
        return true;
      } else {
        return false;
      }
    }
  }
}
