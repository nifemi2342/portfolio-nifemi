import data from './data.js';
import {
  displaySkils,
  displayBioHeading,
  listProjects,
  displayMobileMenu,
  listExperience,
} from './modules.js';
listExperience();
(function () {
  const isMobile = Math.min(window.screen.width, window.screen.height) < 768;
  displaySkils();
  if (isMobile) displayMobileMenu();
  if (data.length !== 0) {
    displayBioHeading(data.bioTitle);
    listProjects(data);
  }
})();
