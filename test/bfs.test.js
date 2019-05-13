const tree = {
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
const bfs = require('../src/bfs');


test('test bfs', () => {
    expect(bfs(tree, true)).toEqual(
        [
            [1],
            [1, 9],
            [1, 8],
            [1, 9, 7],
            [1, 9, 6],
            [1, 8, 18],
            [1, 9, 7, 12],
            [1, 9, 7, 3],
            [1, 8, 18, 16],
            [1, 8, 18, 4],
            [1, 8, 18, 4, 14],
            [1, 8, 18, 4, 2]
        ]
    )

    expect(bfs(tree, false)).toEqual(
        [
            [1, 9, 6],
            [1, 9, 7, 12],
            [1, 9, 7, 3],
            [1, 8, 18, 16],
            [1, 8, 18, 4, 14],
            [1, 8, 18, 4, 2]
        ]
    )
});