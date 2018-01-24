
function createTree(id) {
	tree = new dTree("content");

	tree.add(0, -1, "<strong>JSON 教程</strong>", "http://www.waibo.wang/bible/json/");
	tree.add(1, -1, "1 JSON 教程", "http://localhost/waibo/bible/json/html/1/1.html");
	tree.add(101, 1, "1.1 JSON 简介", "http://localhost/waibo/bible/json/html/1/1.1.1.html");
	tree.add(10101, 101, "1.1.1 什么是JSON", "http://localhost/waibo/bible/json/html/1/1.1.1.html");
	tree.add(10102, 101, "1.1.2 JSON的特点", "http://localhost/waibo/bible/json/html/1/1.1.2.html");
	tree.add(102, 1, "1.2 JSON 语法", "http://localhost/waibo/bible/json/html/1/1.2.1.html");
	tree.add(10201, 102, "1.2.1 JSON 键/值对", "http://localhost/waibo/bible/json/html/1/1.2.1.html");
	tree.add(10202, 102, "1.2.2 JSON 字符串", "http://localhost/waibo/bible/json/html/1/1.2.2.html");
	tree.add(10203, 102, "1.2.3 JSON 数值", "http://localhost/waibo/bible/json/html/1/1.2.3.html");
	tree.add(10204, 102, "1.2.4 JSON 对象", "http://localhost/waibo/bible/json/html/1/1.2.4.html");
	tree.add(10205, 102, "1.2.5 JSON 数组", "http://localhost/waibo/bible/json/html/1/1.2.5.html");
	tree.add(10206, 102, "1.2.6 JSON 布尔值", "http://localhost/waibo/bible/json/html/1/1.2.6.html");
	tree.add(10207, 102, "1.2.7 JSON null", "http://localhost/waibo/bible/json/html/1/1.2.7.html");
	tree.add(10208, 102, "1.2.8 JSON 文件", "http://localhost/waibo/bible/json/html/1/1.2.8.html");
	tree.add(103, 1, "1.3 JSON 对象", "http://localhost/waibo/bible/json/html/1/1.3.1.html");
	tree.add(10301, 103, "1.3.1 访问 JSON 对象的值", "http://localhost/waibo/bible/json/html/1/1.3.1.html");
	tree.add(10302, 103, "1.3.2 修改 JSON 对象的值", "http://localhost/waibo/bible/json/html/1/1.3.2.html");
	tree.add(104, 1, "1.4 JSON 数组", "http://localhost/waibo/bible/json/html/1/1.4.1.html");
	tree.add(10401, 104, "1.4.1 遍历 JSON 数组", "http://localhost/waibo/bible/json/html/1/1.4.1.html");
	tree.add(10402, 104, "1.4.2 修改 JSON 数组的值", "http://localhost/waibo/bible/json/html/1/1.4.2.html");
	tree.add(10403, 104, "1.4.3 删除 JSON 数组元素", "http://localhost/waibo/bible/json/html/1/1.4.3.html");
	tree.add(105, 1, "1.5 JSON 和 JS 对象互转", "http://localhost/waibo/bible/json/html/1/1.5.1.html");
	tree.add(10501, 105, "1.5.1 JSON.parse()", "http://localhost/waibo/bible/json/html/1/1.5.1.html");
	tree.add(10502, 105, "1.5.2 JSON.stringify()", "http://localhost/waibo/bible/json/html/1/1.5.2.html");
	tree.add(2, -1, "参考资料", "http://localhost/waibo/bible/json/html/0/0.1.html");

	document.write(tree);
	tree.openTo(id, true);
}