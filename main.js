function doGet() {
  // 表示したいHTMLのファイル名を指定(拡張子は不要)
  return HtmlService.createTemplateFromFile("index").evaluate();
}

function doPost() {
  
}
