/**
 * 文件api封装
 * @constructor
 */
function FileWrapper() {

}

var file = new FileWrapper();

/**
 * 获取沙盒的文件夹路径
 * @return {string} 字符串
 */
FileWrapper.prototype.getSandBoxDir = function () {
    return ecImporter.getSandBoxDir();
};

/**
 * 拼接出一个带沙盒路径的文件地址
 * @return {string} 文件地址
 */
FileWrapper.prototype.getSandBoxFilePath = function (fileName) {
    return ecImporter.getSandBoxFilePath(fileName);
};

/**
 *
 * 读取文件中的所有内容
 * @param path 文件路径
 *
 * @return string 文件内容字符串
 */
FileWrapper.prototype.readFile = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    return javaString2string(fileWrapper.readFile(path));
};


/**
 *
 * 删除文件某一行或者根据包含条件删除
 * @param path 文件路径
 * @param line 行数，如果是-1 代表这个条件不生效
 * @param contains 包含某个字符串就删除，如果为null代表这个条件不生效
 *
 * @return {bool} true 成功 false 失败
 */
FileWrapper.prototype.deleteLine = function (path, line, contains) {
    if (fileWrapper == null) {
        return null;
    }
    return fileWrapper.deleteLine(path, line, contains);
};

/**
 * 列出文件下的所有文件
 * @param path 路径
 * @return 路径字符串数组
 */
FileWrapper.prototype.listDir = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    let s = fileWrapper.listDir(path);
    if (s == null || s == "") {
        return null;
    }
    s = JSON.parse(s);
    let r = [];
    for (let i = 0; i < s.length; i++) {
        r.push(javaString2string(s[i]));
    }
    return r;
};


/**
 * 将字符串存储到文件中
 * @param data 字符串 数据
 * @param path 文件
 */
FileWrapper.prototype.writeFile = function (data, path) {
    if (fileWrapper == null) {
        return null;
    }
    fileWrapper.writeFile(data, path);
};
/**
 * 创建一个文件或者文件夹
 *
 * @param path 路径
 * @return 布尔型 true 代表创建成功
 */
FileWrapper.prototype.create = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    return fileWrapper.create(path);
};


/**
 * 删除所有文件或者文件夹
 * @param path 文件或者文件路径
 */
FileWrapper.prototype.deleteAllFile = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    fileWrapper.deleteAllFile(path);
};
/**
 * 写入一行到文件中,追加模式
 * @param data 行数据
 * @param path 文件或者文件路径
 * @return 布尔型 true代表成功 false代表失败
 */
FileWrapper.prototype.appendLine = function (data, path) {
    if (fileWrapper == null) {
        return null;
    }
    return fileWrapper.appendLine(data, path);
};
/**
 * 读取一行数据，如果行号不对，返回的是空
 * @param path   路径
 * @param lineNo 行号
 * @return string 返回一行字符串
 */
FileWrapper.prototype.readLine = function (path, lineNo) {
    if (fileWrapper == null) {
        return null;
    }
    return javaString2string(fileWrapper.readLine(path, lineNo));
};

/**
 * 读取所有数据
 *
 * @param path 路径
 * @return 字符串 返回字符串
 */
FileWrapper.prototype.readAllLines = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    var d = fileWrapper.readAllLines(path);
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);

};
/**
 * 创建文件夹
 *
 * @param path 文件夹路径
 * @return 布尔型 true 代表成功，false代表失败
 */
FileWrapper.prototype.mkdirs = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    return fileWrapper.mkdirs(path);
};
/**
 * 文件或者文件夹是否存在
 *
 * @param path 路径
 * @return 布尔型 true 代表存在，false代表不存在
 */
FileWrapper.prototype.exists = function (path) {
    if (fileWrapper == null) {
        return null;
    }
    return fileWrapper.exists(path);
};

/**
 * 复制文件
 *
 * @param src 源文件路径
 * @param dest 目标文件路径
 * @return 布尔型 true 代表成功
 */
FileWrapper.prototype.copy = function (src, dest) {
    if (fileWrapper == null) {
        return null;
    }
    return fileWrapper.copy(src, dest);
};


/**
 * 读取Excel的一行数据
 * 适合版本 EC iOS 3.6.0+
 * @param path Excel文件的路径
 * @param sheetIndex 表格索引，从0开始
 * @param row 行号 从0开始
 * @return string JSON 对象
 */
FileWrapper.prototype.readExcelRow = function (path, sheetIndex, row) {
    if (fileWrapper == null) {
        return null;
    }
    let dd = fileWrapper.readExcelRow(path, sheetIndex, row);
    if (dd != null) {
        return JSON.parse("" + dd)
    }
    return null;
};
/**
 * 读取Excel的所有数据
 * 适合版本 EC iOS 3.6.0+
 * @param path Excel文件的路径
 * @param sheetIndex 表格索引，从0开始
 * @return 布尔型 true 代表成功
 */
FileWrapper.prototype.readExcelAllRow = function (path, sheetIndex) {
    if (fileWrapper == null) {
        return null;
    }
    let dd = fileWrapper.readExcelAllRow(path, sheetIndex);
    if (dd != null) {
        return JSON.parse("" + dd)
    }
    return null;
};