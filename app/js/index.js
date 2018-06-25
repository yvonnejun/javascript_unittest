// var testInput = document.getElementById('test-input');
// var testH1 = document.getElementById('test-h1');

// testH1.innerHTML = reverse(testInput.value);

// 必须下面这种纯粹的单元函数才能完成测试，任何其它形式的函数外js代码都通过不了单元测试(注释可以有)
function reverse(name){
    return name.split("").reverse().join("");
}