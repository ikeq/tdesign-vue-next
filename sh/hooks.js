const fs = require('fs');
const path = require('path');

// 定义源文本的正则表达式
const src_regex = /import (\w+) from '\.\.\/hooks\/\w+';|import { ([\w\s,]+) } from '\.\.\/hooks\/\w+';/g;

// 定义要搜索的目录
const dirs = ['packages/components/common/src', 'packages/components/vue3/src'];

// 定义处理文件的函数
function processFiles(directory) {
    fs.readdirSync(directory, { withFileTypes: true }).forEach(file => {
        const filePath = path.join(directory, file.name);
        if (file.isDirectory()) {
            processFiles(filePath);
        } else if (file.isFile() && (filePath.endsWith('.js') || filePath.endsWith('.ts') || filePath.endsWith('.tsx'))) {
            let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(src_regex, (match, p1, p2) => {
                const importName = p1 || p2;
                return `import { ${importName} } from '@td/adapter-hooks';`;
            });
            fs.writeFileSync(filePath, content, 'utf8');
        }
    });
}

// 遍历目录并处理文件
dirs.forEach(dir => processFiles(dir));