function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('챗티 (Chatty)')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function saveData(key, dataJson) {
  var props = PropertiesService.getScriptProperties();
  props.setProperty(key, dataJson);
  return "OK";
}

function getData(key) {
  var props = PropertiesService.getScriptProperties();
  return props.getProperty(key) || "";
}
