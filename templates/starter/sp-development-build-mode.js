const fs = require('fs');

const packageJsonPath = './package.json'; // Replace with the actual path to your package.json

// Read the content of package.json
fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    return;
  }

  try {
    // Parse the JSON content into an object
    const packageJsonData = JSON.parse(data);

    // Update the config environment to "live"
    packageJsonData.config.environment = 'development-build';

    // Convert the object back to a JSON string
    const updatedJsonContent = JSON.stringify(packageJsonData, null, 2);

    // Write the updated JSON content back to package.json
    fs.writeFile(packageJsonPath, updatedJsonContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing package.json:', err);
      } else {
        console.log('Environment in package.json has been updated to "development-build"');
      }
    });
  } catch (jsonError) {
    console.error('Error parsing package.json:', jsonError);
  }
});
