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

const root = {
    value: 1,
    left: {
        value: 9,
        left: {
            value: 7,
            left: {
                value: 12,
            },
            right: {
                value: 3,
            }
        },
        right: {
            value: 6,
        }
    },
    right: {
        value: 8,
        left: {
            value: 18,
            left: {
                value: 16,
            },
            right: {
                value: 4,
                left: {
                    value: 14,
                },
                right: {
                    value: 2,
                }
            }
        },
    },
};

console.log(bfs(root, false));

module.exports = bfs;
