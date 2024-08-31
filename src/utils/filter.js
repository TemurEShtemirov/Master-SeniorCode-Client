export function filterCoursesByCategory(courses, category) {
  if (category === "all") return courses;
  return courses.filter(
    (course) => course.category.toLowerCase().replace(/\s+/g, "-") === category
  );
}
