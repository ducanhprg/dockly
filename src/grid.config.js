const CONTAINERS_GRID_LAYOUT = {
  // Left Section Layout
  'containerList': [0, 0, 6, 6],            // Main container list (7 rows height)
  'actionStatus': [6, 0, 2, 4],             // Bottom left status
  'containerStatus': [6, 4, 2, 2],          // Bottom right status
  'containerUtilization': [8, 0, 2, 3],          // Bottom left utilization
  'containerVsImages': [8, 3, 2, 3],        // Bottom right comparison

  // Right Section
  'containerLogs': [0, 6, 10, 6],           // Container logs (full height)

  // Footer Section
  'searchInput': [10, 0, 1, 12],          // Search input at bottom
  'toolbar': [11, 0, 1, 12],         

  // Popups/Modals (keep these unchanged)
  'actionsMenu': [4, 4, 4, 4],
  'help': [4, 4, 4, 4],
  'containerInfo': [2, 2, 8, 8]
}

const SERVICES_GRID_LAYOUT = {
  'actionsMenu': [4, 4, 4, 4],
  'actionStatus': [6, 0, 1.5, 10],
  'searchInput': [11, 0, 1, 12],
  'help': [4, 4, 4, 4],
  'servicesInfo': [2, 2, 8, 8],
  'servicesList': [0, 0, 6, 10],
  'servicesLogs': [7.5, 0, 4, 12],
  'servicesStatus': [0, 10, 2, 2],
  'servicesVsImages': [2, 10, 2, 2],
  'toolbar': [11, 0, 1, 12]
}

const IMAGES_GRID_LAYOUT = {
  'imageInfo': [2, 2, 8, 8],
  'imageList': [0, 0, 6, 10],
  'searchInput': [11, 0, 1, 12],
  'actionStatus': [6, 0, 1.5, 10],
  'help': [4, 4, 4, 4],
  'toolbar': [11, 0, 1, 12],
  'imageUtilization': [0, 10, 2, 2]
}

module.exports = {
  CONTAINERS_GRID_LAYOUT,
  SERVICES_GRID_LAYOUT,
  IMAGES_GRID_LAYOUT
}
