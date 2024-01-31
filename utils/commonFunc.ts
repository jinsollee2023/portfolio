export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  const navbarHeight = 80;

  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
};
