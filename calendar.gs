var calendarId = PropertiesService.getScriptProperties().getProperty('CALENDAR_ID'); 
var token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
var owner = PropertiesService.getScriptProperties().getProperty('GITHUB_USERNAME');
var repo = PropertiesService.getScriptProperties().getProperty('GITHUB_REPO_NAME');
var path = 'README.md'; 

function updateGitHubReadme() {
  var now = new Date();
  var events = CalendarApp.getCalendarById(calendarId).getEventsForDay(now);

  var readmeContent = '# Il mio Calendario\n\n## Eventi di oggi\n';
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    readmeContent += `* **${sanitizeString(event.getTitle())}**: ${formatTime(event.getStartTime())} - ${formatTime(event.getEndTime())}\n`;
  }

  updateReadmeOnGitHub(readmeContent);
}

function formatTime(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), 'HH:mm');
}

function updateReadmeOnGitHub(content) {
  var githubEndpoint = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
  var base64Content = Utilities.base64Encode(content);

  var headers = {
    "Authorization": "token " + token,
    "Accept": "application/vnd.github.v3+json"
  };

  var getFileOptions = {
    "method": "get",
    "headers": headers,
    "muteHttpExceptions": true
  };

  var fileResponse = UrlFetchApp.fetch(githubEndpoint, getFileOptions);
  var fileJson = JSON.parse(fileResponse.getContentText());

  var putData = {
    "message": "Aggiornamento automatico del README con gli eventi del calendario",
    "content": base64Content,
    "sha": fileJson.sha
  };

  var putOptions = {
    "method": "put",
    "headers": headers,
    "payload": JSON.stringify(putData),
    "muteHttpExceptions": true
  };

  UrlFetchApp.fetch(githubEndpoint, putOptions);
}

function sanitizeString(str) {
  return str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"").trim();
}
