var path = require('path');
var $ = require('jQuery');

module.exports = function(app) {

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });

    app.post('/api/facialData', function(req, res) {
        console.log(req.body.file);
        var file = req.body.file;
        var apiKey = process.env.MICROSOFTKEY;
        var apiUrl = "https://api.projectoxford.ai/emotion/v1.0/recognize";

        CallAPI(file, apiUrl, apiKey);


        function CallAPI(file, apiUrl, apiKey) {
            $.ajax({
                    url: apiUrl,
                    beforeSend: function(xhrObj) {
                        xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", apiKey);
                    },
                    type: "POST",
                    data: file,
                    processData: false
                })
                .done(function(response) {
                    ProcessResult(response);
                })
                .fail(function(error) {
                    $("#response").text(error.getAllResponseHeaders());
                });
        }

        function ProcessResult(response) {
            var data = JSON.stringify(response);
            $("#response").text(data);
        }

    });
}
