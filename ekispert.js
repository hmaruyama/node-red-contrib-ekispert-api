module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);

        console.log(config.accessKey);

        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("ekispert",LowerCaseNode);
}