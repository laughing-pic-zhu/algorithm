function dfs(node, flag) {
    function read(node, path, total) {
        if (node) {
            path.push(node.value);
            if (flag || !flag && !node.left && !node.left) {
                total.push(path);
            }
            read(node.left, [...path], total);
            read(node.right, [...path], total);
        }
    }
    const t = [];
    const p = [];
    read(node, p, t);
    return t;
}

module.exports = dfs;
