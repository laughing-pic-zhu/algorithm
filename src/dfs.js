function dfs(node, flag) {
    function read(node, path, total) {
        if (node) {
            const {value, left, right} = node;
            path.push(value);
            if (flag || !flag && !left && !right) {
                total.push(path);
            }
            read(left, [...path], total);
            read(right, [...path], total);
        }
    }

    const t = [];
    const p = [];
    read(node, p, t);
    return t;
}

module.exports = dfs;
