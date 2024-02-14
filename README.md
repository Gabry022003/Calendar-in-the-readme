# GitHub README Auto-Update Script

This Google Apps Script automatically updates the `README.md` file of a specified GitHub repository with the current day's events from your Google Calendar.

## Features

- Retrieves daily events from your Google Calendar.
- Formats the README content with the day's events.
- Updates the `README.md` file in the specified GitHub repository.

## Security

- Sensitive credentials and IDs are securely stored using Google Apps Script's environment variables.
- String sanitization to prevent unwanted injections into the `README.md` file.

## Configuration

### Script Settings

To use this script, you need to configure some script properties with your specific details:

1. `CALENDAR_ID`: The ID of your Google Calendar from which to extract events.
2. `GITHUB_TOKEN`: Your GitHub personal access token with the necessary permissions to edit the repository.
3. `GITHUB_USERNAME`: Your GitHub username.
4. `GITHUB_REPO_NAME`: The name of the GitHub repository where you wish to update the `README.md`.

These properties can be set via the "Project Properties" > "Script Properties" section in the Google Apps Script editor.

### Permissions

Upon first use, the script will request permission to access Google Calendar and Google Drive services. Make sure to grant the necessary permissions for the script to function properly.

## Usage

Once configured, the script can be run manually from the Google Apps Script editor or set to run automatically at regular intervals using Google Apps Script triggers.

## Contributing

Feel free to fork, modify, and contribute to improve this script. Ensure you follow best practices for security and credentials management.

## License

This script is distributed under the [MIT License](https://opensource.org/licenses/MIT). For more information, see the `LICENSE` file.