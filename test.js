var tap = require("tap");
var objectFirstKey = require("./");

tap.equal(objectFirstKey({ hello: "world" }), "hello");
tap.equal(objectFirstKey({}), undefined);
var objWithAttachedProperty = {};
objWithAttachedProperty.attachedProperty = 1;
tap.equal(objectFirstKey(objWithAttachedProperty), "attachedProperty");

tap.equal(objectFirstKey(null), undefined);
tap.equal(objectFirstKey(undefined), undefined);
tap.equal(objectFirstKey(""), undefined);
// NOTE: non-empty strings first key is '0' or undefined, based on the engine
tap.equal(objectFirstKey(42), undefined);
tap.equal(objectFirstKey(false), undefined);
tap.equal(objectFirstKey(true), undefined);
tap.equal(objectFirstKey(function() {}), undefined);
tap.equal(objectFirstKey(function withName() {}), undefined);

function fnWithAttachedProperty() {}
fnWithAttachedProperty.attachedProperty = 1;
tap.equal(objectFirstKey(fnWithAttachedProperty), "attachedProperty");
