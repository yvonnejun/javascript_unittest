describe("A suite of basic functions", function() { // 根据karma的配置，这个测试文件里面囊括了所有'app/js/*.js'功能js文件，所以下面可以直接调用所有js文件里面的函数方法来执行用例
    var calc;
    beforeAll(function(){
        calc = new Cal(); // 所有的测试用例执行前，先实例化calc对象
    });
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
    });
    describe("Test Add", function(){
        it("add 1 and 3 should equal 4", function(){
            var result = calc.add(1, 3);
            expect(result).toBe(4);
        });
    });
    it("test toBeCloseTo",function(){ // 一个it算一个用例，所以下面统计是TOTAL:3 SUCCESS
        var a = 3.78, b = 3.76;

        expect(a).not.toBeCloseTo(b, 2);
        expect(a).toBeCloseTo(b, 1);

    });
    /* 是否已定义 */
    it("test toBeDefined",function(){ 
        var a = {
            foo: 'foo'
        };

        expect(a.bar).not.toBeDefined(); // 成功--表示a.bar没有定义
        expect(a.foo).toBeDefined();// 成功--表示a.foo有定义

    });

    /* 是否是false值 **
    *以下值是false外，其它都不是false
    *null
    *undefined
    *NaN
    *0
    *''和""
    * document.all
    */
    it("test toBeFalsy",function(){ 
        var a, foo = 'foo';

        expect(a).toBeFalsy(); // 成功--表示a是false值
        expect(foo).not.toBeFalsy();// 成功--表示foo有值不少false

    });

    /* 是否为true值 */
    it("test toBeTruthy",function(){ 
        var a, foo = 'foo';

        expect(a).not.toBeTruthy(); // 成功--表示a是false值
        expect(foo).toBeTruthy();// 成功--表示foo有值不少false

    });

});