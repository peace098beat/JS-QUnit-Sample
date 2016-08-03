QUnit.test("a basic test example", function(assert) {
    var value = 'hello';
    assert.equal(value, "hello", "We expect value to be hello");
});

// ok()
QUnit.test("ok test", function(assert) {
    // no error
    assert.ok(true, "true succeeds");
    assert.ok("non-empty", "non-empty string succeeds");

    // error
    assert.ok(false, "false fails");
    assert.ok(0, "0 fails");
    assert.ok(NaN, "NaN fails");
    assert.ok("", "empty string fails");
    assert.ok(null, "null fails");
    assert.ok(undefined, "undefined fails");
});

// equal()
QUnit.test("equal test", function(assert) {
    // 通る
    assert.equal(0, 0, "Zero, Zero; equal succeeds");
    assert.equal("", 0, "Empty, Zero; equal succeeds");
    assert.equal("", "", "Empty, Empty; equal succeeds");
    assert.equal(0, false, "Zero, false; equal succeeds");

    // 失敗
    assert.equal("three", 3, "Three, 3; equal fails");
    assert.equal(null, false, "null, false; equal fails");
});

// deepEqual()
QUnit.test("deepEqual test", function(assert) {
    var obj = { foo: "bar" };
    var f = hoge;

    assert.deepEqual(obj, { foo: "bar" }, "Two objects can be the same value");
    assert.deepEqual(f, test, "Two objects can be the same in value")
    assert.deepEqual(obj, f, "Two objects can be the same in value")
});

function hoge() {};

// expect(): 同期処理 アサーションの数を指定する, 数が違えば失敗
QUnit.test("assertion numbers test", function(assert) {
    assert.expect(2);

    function calc(x, operation) {
        return operation(x);
    }

    var result = calc(2, function(x) {
        assert.ok(true, "calc() calls operation function");
        return x * x;
    });

    assert.equal(result, 4, "2 square equals 4");

});

QUnit.test("assertion numbers test", function(assert) {
    assert.expect(1);
    var $body = $("body");
    $body.on("click", function() {
        assert.ok(true, "body was clicked!");
    });

    $body.trigger("click");
});

// module()
QUnit.module("Group a", {
    beforeEach: function() {},
    afterEach: function() {}
});
QUnit.test("a basic test example", function(assert) {
    assert.ok(true, "this test is fine");
});
QUnit.test("a basic test example 2", function(assert) {
    assert.ok(true, "this test is fine");
});

QUnit.module("Group b");
QUnit.test("a basic test example 3", function(assert) {
    assert.ok(true, "this test is fine");
});
QUnit.test("a basic test example 4", function(assert) {
    assert.ok(true, "this test is fine");
});

/* テスト前・後に実行する処理(hooks)を定義 */
