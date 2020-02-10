function bfs(node, flag) {
    function read(queue, tree) {
        while (queue.length) {
            const {node, path} = queue.shift();
            const {left, right, value} = node;
            path.push(value)
            if (flag || !flag && !left && !right) {
                tree.push(path);
            }

            if (left) {
                queue.push({
                    node: left,
                    path: [...path]
                })
            }

            if (right) {
                queue.push({
                    node: right,
                    path: [...path]
                })
            }
        }
        return tree
    }

    const t = [];
    const p = [];
    const q = [{
        node,
        path: p
    }];
    read(q, t);
    return t;
}

module.exports = bfs;
