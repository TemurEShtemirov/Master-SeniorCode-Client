export const extractUniqueCategories = (courses) => {
    const uniqueCategories = Array.from(new Set(courses.map(course => course.category)))
    return uniqueCategories.map(category => ({id:category.toLowerCase().replace(/\s+/g,'-')}))
}